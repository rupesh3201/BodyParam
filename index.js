import express from 'express';

const app = express();
app.use(express.json()); // Fix: Call express.json() as a function must use 

// Creating data of students
const Students = [
    { id: 1, Name: "Rupesh", City: "Pune" },
    { id: 2, Name: "Nilesh", City: "Nanded" },
    { id: 3, Name: "Pankaj", City: "Goa" },
    { id: 4, Name: "Sandip", City: "Hingoli" },
];
app.get("/Students", (req, res) => {
    res.send(Students);
})
// Endpoint to add a student via POST request
app.post("/Students", (req, res) => {
    console.log(req.body);

    const { id, Name, City } = req.body;

    // Validation: Ensure all fields are provided
    if (!id || !Name || !City) {
        return res.status(400).json({
            success: false,
            message: "Please provide id, Name, and City.",
        });
    }

    // Check if ID already exists
    const existingStudent = Students.find(student => student.id === id);
    if (existingStudent) {
        return res.status(400).json({
            success: false,
            message: "Student with this ID already exists.",
        });
    }

    // Add new student
    const student = { id, Name, City };
    Students.push(student);

    res.status(201).json({
        success: true,
        data: student,
        message: "Student added successfully",
    });
});

const Port = 5002;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
