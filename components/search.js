var React = require('react');

var search = React.createClass ({
	
	render: function(){

		<div className= "Search">
			<div class="row">
				  <div class="col-lg-6">
				    <div class="input-group">
				      <span class="input-group-btn">
				        <button class="btn btn-default" onClick = {this.handleclick} type="button">Go!</button>
				      </span>
				    </div>
				</div>
				  <div class="col-lg-6">
				    <div class="input-group" id = "display">
				        <button class="btn btn-default" type="button">Save!</button>
				      
				   
				    </div>
				  </div>
			</div>
		</div> 


		}
	});
	module.exports = search;
