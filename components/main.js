// build a page with bootstrap that has a search component

var React = require('react');

var saved = require('./saved');
var search = require('./search');

var main = React.createClass({ 
	// handleclick: function (){
	// 	var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	// 	$.ajax ({
	// 		method: "GET",
	// 		url: queryurl	
	// 	}).done(function(response){
	// 		var resultsDiv = ("<div id = results> </div>");
	// 		resultsDiv.append(response);
	// 		getElementById("display").append(resultsDiv);
	// 	}).fail(function(err) {
	// 		throw err;
	// 	});

	// },

	render: function () {

// handleclick = {this.handleclick}
	return (
		
		<div className = "container1">
			<div className="row">

			<search  />
		</div>
			<div className = "row">
			<saved />
		</div>
	</div>	
		);
	}
});

module.exports = main;
