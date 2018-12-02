var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./dbModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);
console.log("Server started successfully...");

//Add a new student record to the database
app.post('/addStudent', function(req, res){
    database.models.students.create({
        firstname: req.body.firstname,
        surname: req.body.surname,
        gender: req.body.gender,
        date_of_birth: new Date(req.body.date_of_birth),
        phone_number: req.body.phone_number,
        email: req.body.email
    });
});

//Search for a student by ID
app.get('/search/:id', function(req, res){
    database.models.students.findOne({where: {id: req.params.id}}).then(student=>{
        res.json({student: student});
    });
})

//Retrieve all the records in the database
app.get('/', function(req, res){
    database.models.students.findAll().then(students=>{
        res.json({students: students});
    });
});

//Delete a student by ID
app.get('/delete/:id', function(req, res){
    database.models.students.destroy({where: {id: req.params.id}}).then(()=>{
        res.json({message: "Record deleted"});
    });
});

//Updates a student's record if it exists
app.post('/update/:id', function(req, res){
    database.models.students.update(req.body, {where: {id: req.params.id}}).then(student=>{
        res.json({message: "Record updated"});
    });
});