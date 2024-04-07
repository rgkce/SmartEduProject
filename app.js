const express=require('express');
const mongoose=require('mongoose');
const pageRoute=require('./routes/pageRoutes');
const courseRoute=require('./routes/courseRoutes');

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

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});