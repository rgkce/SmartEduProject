const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
const pageRoute=require('./routes/pageRoutes');
const courseRoute=require('./routes/courseRoutes');
const categoryRoute=require('./routes/categoryRoutes');
const userRoute=require('./routes/userRoutes');

const app=express();

//CONNECT DB
mongoose.connect('mongodb://localhost/smartedu-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('DB Connected Succesfully');
}).catch(err=> console.log(err));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//GLOBAL VARIABLE
global.userIN = null;

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
}));


//ROUTES
app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});