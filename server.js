// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nyt-react");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/api/saved", function(req,res){

db.find({}), function(err , Article){
	if (err) return handleError(err);

	else { 
		res.json(Article);
	}
	});
});

app.post("/api/saved", function(req,res){
	db.create({
	var newArticle = new Article(req.body);
	newArticle.save(function(err, Article){
	if (err) return handleError(err);

	else { 
			console.log("Article Saved");
	}
	});
});

app.delete("api/saved/delete/:id",function (req,res){
	db.delete({"_id": req.params.id

	});
)};
// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});