const express=require('express');
const courseController=require('../controllers/courseControllers');

const router=express.Router();
router.route('/').post(courseController.createCourse);

module.exports=router;