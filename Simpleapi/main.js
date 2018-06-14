'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentDetails = [
    {
        id: 1,
        name: "lalith",
        age: 21
    },
    {
        id: 2,
        name: "chandu",
        age: 21
    },
    {
        id: 3,
        name: "teja",
        age: 21
    },
    {
        id: 4,
        name: "sai ram",
        age: 21
    }
    
];
app.get("/api/index", (req, res) => {
    res.json(studentDetails);
});

app.post("/api/index",(req,res)=>{
    const addStudent={
        id: studentDetails.length+1,
        name: req.body.name,
        age: req.body.age
    }
    studentDetails.push(addStudent);
    res.json("Successfully added");
});

app.delete("/api/index/:id",(req,res)=>{
    const x = parseInt(req.params.id);
    const ind=studentDetails.findIndex((student) => student.id===x);
    const deleted=studentDetails.splice(ind,1);
    res.json(deleted);
})

app.patch("/api/index",(req,res)=>{
    const x = parseInt(req.params.id);
    const ind=studentDetails.findIndex((student) => student.id===x);
    studentDetails[]
    studentDetails.push(addStudent);
})

app.listen(2000);