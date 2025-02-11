import express from 'express'

const app = express();
// creating data of student
const Studnet = [
{ id : 1 , name : "Rupesh" , City : "Pune"},
{ id : 2 , name : "Nilesh" , City : "Nanded"},
{ id : 3 , name : "Pankaj" , City : "Goa"},
{ id : 1 , name : "Sandip" , City : "Hingoli"},



]

// app listing on something
app.get("/Student",(req, res)=>{
    console.log(req.query);
    res.json({
        sucess : true,
        data : Studnet,
        message : `Studnt fetch sucessfully  `,
    });
})
const Port = 5002;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});


