const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const request = require("request");



app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", function(req, res) {
//
//   // console.log(req.body.crypto);
//   //it will receive theinput of the option we will select at the page.
//
//
//   request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
//     // console.log(response);
//     //for this above we have installed "npm install request" in hyper terminal as well as above const request = require("request");.
//
//     // // now using the JSON format
//     // var data = JSON.parse(body);
//     // var price = data.last;
//     //
//     // //here above, data means the entire set of code of data we get from the api and data.last means what all we specifically want from the whole data
//     //
//     // res.send("<h1>The price of the Bitcoin is " + price + " USD</h1>")
//
//     //!!!!!!!*** Now to get the exact Details of what we are asking on the Screen we use the following code!!!!!!!!!!!!*************
//
//
//
//     res.send("<h1>The price of the " + crypto + " is " + price + fiat + " ")
//   });
// });


// 33333333333333333333333333333  Now the below code is for truncating the URL so that we can use the both Bitcoin and Dollars value at the same time
app.post("/", function(req, res) {

    var crypto = req.body.crypto;
    //it will store the value of the Crypto that we have selected in the dropdwon as for the below also
    var fiat = req.body.fiat;

    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    var finalURL = baseURL + crypto + fiat;


    request(finalURL, function(error, response, body){
      var data = JSON.parse(body);
      var price = data.last;

      var currentDate = data.display_timestamp;

// WE USE RES.WRITE() BECAUSE RES.SEND() HAS A DRAWBACK THAT IT WON'T EXECUTE 2 LINES OF CODE ITSELF.
    res.write("<h1>The current date is " + currentDate + "</h1> ");
    res.write("<h1>The price of the " + crypto + " is " + price + fiat + "</h1> ");


    res.send();
  });
});

var data = JSON.parse(body);
var price = data.last;

var crypto = req.body.crypto;
var fiat = req.body.fiat;

app.listen(3000, function(){
  console.log("Port is running on 3000");
});
