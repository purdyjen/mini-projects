const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello.");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at purdypromedia@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Jenna and I'm owned by two cats, Chico and Iggy. I am also fostering a kitten named Shuri.");
});

app.listen(3000, function (){
    console.log("Server started on port 3000");
});