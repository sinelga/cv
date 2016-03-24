import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import BlogItemDetailsDashboard from './BlogItemDetailsDashboard'


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
var stitle="" 	

class BlogItemDetails extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	}

	loadajax(urlstr,mark){
		
		var request = new XMLHttpRequest();
		request.open('GET', urlstr, true);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    
			    if (mark) {
			    	this.setState({mark: data});
			    } else {
			    	
			    	this.setState({data: data});
			    
			    }
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();
		
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
		stitle = this.props.params.stitle
		
		 this.loadajax('/en_US_programming_blog.json',false)			 
		 this.loadajax('/www/'+site+'/blog/'+topic+'/'+stitle+'/'+stitle+'.html.json',true)
						
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")
		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
			   
			   this.loadajax('/www/'+site+'/blog/'+topic+'/'+stitle+'/'+stitle+'.html.json',true)
			   
		   }
		
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Details componentDidUpdate")
//		console.log("BlogItemDetails componentDidUpdate",prevProps.params,this.props.params)
		
		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
			   
				var requestm = new XMLHttpRequest();
				requestm.open('GET', '/www/'+site+'/blog/'+topic+'/'+stitle+'/'+stitle+'.html.json', true);
				
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
    	
    	  {this.props.children || <BlogItemDetailsDashboard data={this.state.data} topic={this.props.params.topic} stitle={this.props.params.stitle} />}
   	  		
    	  <div id="background"> {contents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = BlogItemDetails