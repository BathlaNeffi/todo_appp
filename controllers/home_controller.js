

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
    return res.render('home',{
        title:"Todo",
        data_control:data
    }
    )
}


module.exports.addedTask=(req,res) =>{
    console.log(req.body);

    data.push({
        task:req.body.description,
        catagory:req.body.catagory,
        date:req.body.date
    })
    return res.redirect('back');
}


module.exports.deleteTask=(req,res)=>{
   
    console.log(req.query) ;



    let task=req.query.task;

    let dataIndex=data.findIndex((desc) => desc.task ==task );
    if(dataIndex!=-1){
        data.splice(dataIndex,1);
        
    }

    return res.redirect('back');
}