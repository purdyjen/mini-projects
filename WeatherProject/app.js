const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const zipCode = req.body.zipCode;
  const countryCode = "US";
  const units = "imperial";
  const apiKey = process.env.API_KEY;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipCode +
    "," +
    countryCode +
    "&units=" +
    units +
    "&appid=" +
    apiKey;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = Math.round(weatherData.main.temp);
      const description = weatherData.weather[0].description;
      const cityName = weatherData.name;
      const icon =
        "https://openweathermap.org/img/wn/" +
        weatherData.weather[0].icon +
        "@2x.png";
      console.log(temp, description);

      res.write(
        "<h1>The temperature in " +
          cityName +
          " is " +
          temp +
          " degrees Fahrenheit.</h1>"
      );
      res.write("<img src=" + icon + ">");
      res.write("<p>The weather is currently " + description + ".</p>");
    });
  });
  console.log(req.body.zipCode);
});

app.listen(3000, function () {
  console.log("Server is running on Port 3000");
});
