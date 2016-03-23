import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import BlogDashboard from './BlogDashboard'


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

class Blog extends React.Component {

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

				
	}	
	
	componentDidMount(){
//		console.log("Didmount Details")
		site =document.domain
		
		console.log(this.state.data)
				
//		if (!hasChield) {
		
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
			requestm.open('GET', '/www/'+site+'/blog/blog.json', true);
			
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
				
//		}
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
		

		
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Blog componentDidUpdate",prevProps.params,this.props.params)
		
		   let oldId = prevProps.params.topic
		   let newId = this.props.params.topic
		
		   
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
				requestm.open('GET', '/www/'+site+'/blog/blog.json', true);
				
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
    		
    	      <div style={styles.wrapper}> 
    	      <Well>
    	      
    	      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
    	      	<h2>BLOG</h2>
    	           
    	      	{this.props.children || <BlogDashboard data={this.state.data} />}
    	      
    	      </Well>
    	      
    	  		</div>
    	  		<div id="background"> {contents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = Blog