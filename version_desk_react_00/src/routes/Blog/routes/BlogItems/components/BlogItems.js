import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import BlogItemsDashboard from './BlogItemsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var site =""
var topic =""	

class BlogItems extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	}

	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)

	}	
	
	componentDidMount(){
//		console.log("Didmount blogItems",this.props.params)
		site =document.domain
		topic = this.props.params.topic
//		
		var request = new XMLHttpRequest();
		request.open('GET', '/en_US_programming_blog.json', true);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    this.setState({data: data});
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();			
			var requestm = new XMLHttpRequest();
			requestm.open('GET', '/www/'+site+'/blog/'+topic+'/'+topic+'.json', true);
			
			requestm.onload = function() {
				  if (requestm.status >= 200 && requestm.status < 400) {
				    // Success!			  
				    var data = JSON.parse(requestm.responseText);
				    this.setState({mark: data});
				    
				  } else {

				  }
				}.bind(this);

				requestm.onerror = function() {
				  // There was a connection error of some sort
				};

				requestm.send();			
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
//		console.log("Blog componentDidUpdate",prevProps.params,this.props.params)

		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
			   
				var request = new XMLHttpRequest();
				request.open('GET', '/en_US_programming_blog.json', true);
				
				request.onload = function() {
					  if (request.status >= 200 && request.status < 400) {
					    // Success!			  
					    var data = JSON.parse(request.responseText);
					    this.setState({data: data});
					    
					  } else {
					    // We reached our target server, but it returned an error

					  }
					}.bind(this);

					request.onerror = function() {
					  // There was a connection error of some sort
					};

					request.send();			
					var requestm = new XMLHttpRequest();
					requestm.open('GET', '/www/'+site+'/blog/'+topic+'/'+topic+'.json', true);
					
					requestm.onload = function() {
						  if (requestm.status >= 200 && requestm.status < 400) {
						    // Success!			  
						    var data = JSON.parse(requestm.responseText);
						    this.setState({mark: data});
						    
						  } else {

						  }
						}.bind(this);

						requestm.onerror = function() {
						  // There was a connection error of some sort
						};

						requestm.send();   
		   }
		
					
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	
	  
	var contents = this.state.mark.Contents
//	console.log(this.state.data)
    return (
    	<div>
    		<h2>{this.props.params.topic}</h2>
    	            	           
    	      	{this.props.children || <BlogItemsDashboard data={this.state.data} topic={this.props.params.topic} />}
    	          	     
    	  		<div id="background"> {contents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = BlogItems