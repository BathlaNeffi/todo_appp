const express=require('express');
const PORT=8000;
const app=express();
const path=require('path');

// inform the server that for frontend ui we are using ejs

app.set('view engine', "ejs");
// telling the server that front end view can be accesed thorugh the views folder

app.set('views',path.join(__dirname,'views'));
console.log(__dirname);


app.use('/',require('./routes/index'));

app.use(express.static('assets'));




app.listen(PORT,(err)=> {
    if(err){console.log('Error in running the server')};

    console.log(`Server is runnning on the port :${PORT}`);
})