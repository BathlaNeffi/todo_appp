var check=document.querySelectorAll('.checkbox');
// console.log(check[0]);
var deleteTask=document.querySelector('#delete-task');

for(let i of  check ){
i.addEventListener('click', function(){
    console.log('hello', i );

    let text=i.getAttribute("action");

    console.log(text);
   


    // const  arr=string.split(" ");
    
    // for(let z of arr){
    //     console.log(z);
    // }
    deleteTask.setAttribute('href', `${text}`);
     return ;
    
})
}





// console.log(deleteTask);


// check.forEach( (i) => console.log(i));