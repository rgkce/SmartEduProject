const mongoose=require('mongoose');
const bcrypt = require('bcrypt'); //passwordu databasede şifreli tutmak için paket(db e eklenmeden şifrelenir.)
const Category = require('./Category');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        tyoe:String,
        enum:["student","teacher","admin"],
        default:"student"
    },
});

//şifreleme için middleware
UserSchema.pre('save', function(next){
    const user=this;
    bcrypt.hash(user.password, 10, (error, hash)=>{
        user.password=hash;
        next();
    });
});


const User=mongoose.model('User',UserSchema);
module.exports=User;