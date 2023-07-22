const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
    task:{
        type: String,
        require: true
    },

    date:{
        type: String,
        require: true
    },

    catagory:{
        type: String,
        require: true
    }   

});


const todoModel=mongoose.model('todoModel', todoSchema);

module.exports=todoModel;
