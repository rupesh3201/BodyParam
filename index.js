import express from 'express'

const app = express();
// creating data of student
const  Students = [
{ id : 1 , Name : "Rupesh" , City : "Pune"},
{ id : 2 , Name : "Nilesh" , City : "Nanded"},
{ id : 3 , Name : "Pankaj" , City : "Goa"},
{ id : 4 , Name : "Sandip" , City : "Hingoli"},



]

// app listing on something
app.get("/Students",(req, res)=>{
    console.log(req.query);
    const {City} = req.query;
    const FiltredStudents =  Students.filter((Studnet)=>{
        if( !City)   
            return true;
        if( Studnet.City === City)   
        return Studnet; 
        if ( !id)
            return true;
        if( Studnet.id === id)
            return Studnet;
        if ( !Name)
            return true;
        if( Studnet.Name === Name)
            return Studnet;
    })

    res.json({
        sucess : true,
        data : Students,
        data : FiltredStudents,
        message : `Student fetch sucessfully  `,
    });
})
const Port = 5002;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});


