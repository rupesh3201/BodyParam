import express from 'express'

const app = express();
// creating data of student
const Studnets = [
{ id : 1 , name : "Rupesh" , City : "Pune"},
{ id : 2 , name : "Nilesh" , City : "Nanded"},
{ id : 3 , name : "Pankaj" , City : "Goa"},
{ id : 4 , name : "Sandip" , City : "Hingoli"},



]

// app listing on something
app.get("/Students",(req, res)=>{
    console.log(req.query);
    const {City} = req.query;
    const FiltredStudent = Studnets.filter((Studnet)=>{
        if(Studnets.City == City)   
        return Studnet; })
    res.json({
        sucess : true,
        data :Studnets,
        message : `Student fetch sucessfully  `,
    });
})
const Port = 5002;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});


