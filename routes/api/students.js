const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');
const verifyJWT = require('../../middleware/verifyJWT');




router.route('/')
    .get(studentsController.getAllStudents)


    
router.route('/create')   
    .post( studentsController.createNewStudent)
    

router.route('/update/:id')
    .put(verifyJWT, studentsController.updateStudent)

router.route('/delete/:id')
    .delete(verifyJWT, studentsController.deleteStudent);

router.route('/update/:id')
    .get(verifyJWT, studentsController.getStudent);






module.exports = router;