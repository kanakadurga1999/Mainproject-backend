require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path')
const {logger,logEvents} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions= require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const studentsRoute = require('./routes/api/students')
const authRoute = require('./routes/api/auth');
const refreshRoutes = require('./routes/api/refresh');
  const userRoutes = require('./routes/api/userRoutes')
  const batchRoute = require('./routes/api/batchs')



const PORT= process.env.PORT || 3500

console.log(process.env.NODE_ENV)

connectDB()
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000','https://vast-tan-chameleon-tux.cyclic.app'],
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}))

//Routes
app.use('/api/v1/auth', authRoute);

app.use('/api/v1/refresh', refreshRoutes);


app.use('/api/v1/dash/studentprofiles', studentsRoute);
app.use('/api/v1/dash',batchRoute)

   app.use('/users', userRoutes); // Use only for Developement phase


app.use('/', express.static(path.join(__dirname, './build')));
app.get('*', function (_, res){
    res.sendFile(path.join(__dirname, './build/index.html'), function(error){
        res.status(500).send(error);
    })
})


app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

// app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT}`))

mongoose.connection.once('open', () => {
    // console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})