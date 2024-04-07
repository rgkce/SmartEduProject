const mongoose=require('mongoose');
const slugify=require('slugify');
const Category = require('./Category');
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
    slug:{
        type:String,
        unique:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
});

CourseSchema.pre('validate',function(next){
    this.slug=slugify(this.name, {
        lower:true, //ismi küçük harf yapar.
        strict:true, //gereksiz karakterleri yok sayip string ile devam etmesini sağlar.
    });
    next();
});

const Course=mongoose.model('Course',CourseSchema);
module.exports=Course;