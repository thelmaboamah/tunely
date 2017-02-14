var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var db = require("./models");
var controllers = require("./controllers");




app.get("/", function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen(process.env.PORT || 3000, function(){
	console.log("Express server is listening on http://localhost:3000/");
})

app.get("/api", controllers.api.index);

app.get("/api/albums", controllers.albums.index);

app.post('/api/albums', controllers.albums.create);