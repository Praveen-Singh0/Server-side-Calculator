const express = require("express");  // here express naam ke varable me hmne "express" ki functionality load kr di
const bodyparser = require("body-parser"); // same isme bhi ,. now we can use them

const app = express(); // here express module call ho raha h


app.get("/", function(req, res){ // here i create a call-back funtion for request and response from the server..
    res.sendFile(__dirname + "/index.html"); // __dirname = your path where index.html file exist (o:/caculator/index.html) 
});

app.use(bodyparser.urlencoded({extended: true})); //here bodyparser is to get data from html to server i think.. not sure
app.post("/", function(req, res){ 

    var num1 = Number(req.body.num1); // here num1 and num2 ke jariye server ko request (numbers) send kr rahe hein,. 
    var num2 = Number(req.body.num2);

    var result = num1+num2;
    res.send("your answer is "+ result); // this is the result when we click on submit button
});

app.listen(3000, function(){ // app will listen your request and response in the post of 3000 so go "localhost:3000" and see 
    console.log("server chalne laga h");
});