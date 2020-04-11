const express= require('express');

const app= express();


app.get('/',(req,res)=>{
    res.send("Hello store people!!!").status(200);
})
app.get('/login',(req,res)=>{
    res.send("hello login page").status(200);
})

app.listen(3002,()=>{
    console.log("Server is running on port 3002 and we are good to go");
});


//mongodb  without
