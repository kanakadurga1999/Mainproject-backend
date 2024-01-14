// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URI)
//     } catch (err) {
//         console.log(err)
//     }
// }

// module.exports = connectDB

const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;