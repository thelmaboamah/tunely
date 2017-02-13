var express = require("express");
var app = express();
var db = require("./models");
var controllers = require("./controllers");

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
})

app.use(express.static("public"));


app.listen(process.env.PORT || 3000, function(){
	console.log("Express server is listening on http://localhost:3000/");
})

app.get("/api", controllers.api.index);

app.get("/api/albums", controllers.albums.index);