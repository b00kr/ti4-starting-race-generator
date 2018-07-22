var express = require("express");
var app = express();
var port = process.env.PORT || 8000;



// app.get("/", function(req, res){
//   res.sendFile("./ti4_generator.html");
// })


app.get("/", function(req, res)
{
    res.sendFile("ti4_generator.html", {"root": __dirname});
});

app.listen(port, function() {
    console.log("App is running on port " + port);
});
