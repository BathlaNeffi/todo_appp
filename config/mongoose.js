// require library

const mongoose=require('mongoose');

// connect to the local host db


mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');

//  aqquire the connection with the db

const db=mongoose.connection;

// if err in aquiring the connection

db.on('error', console.error.bind(console,'Connection error'));

//  up and running this will print when sucessfully connected
db.once('open', function(){
    console.log('Sucessfully connected to database');
})