import express from 'express'

const app = express();
app.use(express.json) 
// to collect data from body which send by post 
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

app.get("/Students/:id",(req, res)=>{
    const  { id , name, city } = req.body;
    const student = {
        id , 
        name,
        city
    }
    Students.push(student);
    console.log(req.params);
    // const {City} = req.query;
    // const Student =  Students.find((Studnet)=>{
    //     if( Students.id==1)   
    //         return true;})
        res.json({
            sucess : true,
            data : student,
            msg :"Student find sucessfully"

        })
})
app.post("/Students",(req, res)=>{
console.log(req.body)
res.json({
    sucess: true ,
})
})
const Port = 5002;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});


