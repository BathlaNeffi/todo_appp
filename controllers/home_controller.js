
const todoModel=require('../model/todo_model');
const data=[
    {
        task:"Where we need to put the task 1",
        date:"YYYY-MM-DD",
        catagory:"School"

    },
    {
        task:"Where we need to put the task 2",
        date:"YYYY-MM-DD",
        catagory:"Other"

    },
    {
        task:"Where we need to put the task 3",
        date:"YYYY-MM-DD",
        catagory:"business"

    }
];



module.exports.home= (req,res)=>{


    todoModel.find({})
    .then((todoData)=>{
        console.log('databse data')
        return res.render('home',{
            title:"Todo",
        data_control:todoData
        });
    })

    .catch((err) => {
        res.send({ kq: 0, msg: 'Errror' })
    })



    /*
    return res.render('home',{
        title:"Todo",
        data_control:data
    }
    )

    */
}


module.exports.addedTask=(req,res) =>{


    todoModel.create({
        task:req.body.description,
        catagory:req.body.catagory,
        date:req.body.date
    })

    .then((result) => {
        // resp.send({ kq: 1, msg: 'Đã thêm thành công' })
    
        console.log(`*****************`,result);
        return res.redirect(`back`);
      })
      .catch((err) => {
        res.send({ kq: 0, msg: 'Errror' })

      })


    /*
    console.log(req.body);

    data.push({
        task:req.body.description,
        catagory:req.body.catagory,
        date:req.body.date
    })
    return res.redirect('back');
    */
}


module.exports.deleteTask=(req,res)=>{

    //  get the id from the query from URL

    let id=req.query.id;
    // find the contact in the database using ID and delete it

    todoModel.findByIdAndDelete(id)

    .catch((err)=>{
        console.log('error in deleting the object in database');
        return;
    })

    return res.redirect('back');



    /*
   
    console.log(req.query) ;



    let task=req.query.task;

    let dataIndex=data.findIndex((desc) => desc.task ==task );
    if(dataIndex!=-1){
        data.splice(dataIndex,1);
        
    }

    return res.redirect('back');

    */
}