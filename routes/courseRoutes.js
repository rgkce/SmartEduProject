const express=require('express');
const courseController=require('../controllers/courseControllers');

const router=express.Router();
router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse);

module.exports=router;