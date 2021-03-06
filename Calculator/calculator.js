const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;

    res.send("The result is " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    function bmiCalculator (weight, height) {
        var bmi = weight / Math.pow(height, 2);
        bmi = Math.round(bmi);
    if (bmi < 18.5) {
            return "Your BMI is " + bmi + ", so you are underweight.";
        } else if ( bmi >= 18.5 && bmi < 24.9) {
            return "Your BMI is " + bmi + ", so you have a normal weight.";
        } else {
            return "Your BMI is " + bmi + ", so you are overweight.";
        }
    }

    res.send(bmiCalculator(weight, height));
});

app.listen(3000, function (){
    console.log("Server started on port 3000");
});