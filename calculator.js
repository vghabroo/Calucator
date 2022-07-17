//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    //this num1 and num2 gets passed as a string not number , To change a string to number in javascript we use Number()
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the Calculation is: " + result);
});

app.listen(3000, function(){
  console.log("Server 300 is running!");
});
