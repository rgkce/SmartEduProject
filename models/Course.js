const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true //başta ve veya sonda birakilan boşluklari kaldirir.
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

const Course=mongoose.model('Course',CourseSchema);
module.exports=Course;