var express = require("express");
var app = express();


app.listen(3000, function(){
  console.log("the server is listening on port 3000")
});

app.get("/", function(req, res){
  res.sendFile(ti4_generator.html)
})
