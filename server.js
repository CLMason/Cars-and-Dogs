const express = require("express"),
app = express(),
port = 8000;

app.use(express.static(__dirname + "/static"));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/cars", function(req, res){
    res.sendFile(__dirname + "/views/cars.html");
});
app.get("/dogs", function(req, res){
    res.sendFile(__dirname + "/views/dogs.html");
});

app.get("/form", function(req, res){
    res.sendFile(__dirname + "/views/form.html");
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})
