const express=require('express');

const db=require('../config/mongoose');

const todoModel=require('../model/todo_model');

const router=express.Router();

router.use(express.urlencoded());

const homeControlller=require('../controllers/home_controller');

router.get('/', homeControlller.home);

router.post('/create-task', homeControlller.addedTask);

router.get('/delete-task/', homeControlller.deleteTask);

module.exports=router;