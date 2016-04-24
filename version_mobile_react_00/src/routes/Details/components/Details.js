import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
//import Firebase from 'firebase'
//import StarRating from 'react-star-rating'
import DetailsDashboard from './DetailsDashboard'
import MiddleNav from './MiddleNav'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com/');	
//var item={}
var stopic =""
	
class Details extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	  this.loadajax = this.loadajax.bind(this)
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
		
		stopic = this.props.params.stopic
//		console.log("Willmount Details",stopic)
		

	}	
	
	componentDidMount(){
		
		this.loadajax('/cv-mazurov-export.json',false)
	
				
	}
			
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")
//		console.log("Details componentWillUpdate")
//		console.log(this.props.params,prevProps.params)
//		console.log(Object.keys(this.props.params).length)
		
		
		let oldId = prevProps.params.link
		let newId = this.props.params.link
		
		if (newId !== oldId) {
			
			if (Object.keys(this.props.params).length === 2) {
				   
				 this.loadajax('/cv-mazurov-export.json',false)
				 
				   
			}
			
			
		}
				
		
	}

	componentDidUpdate(prevProps) {
		
		
					
	}

	 componentWillUnmount(){		 

//		baseRef.off()
	 } 
  render() {
//	var contents = this.state.mark.Contents
	  
//	console.log(this.state.data)  
	
	var meta ={}
	
	if (this.state.data.title !== undefined) {
//		console.log(this.state.data)
		meta = {
			title: this.state.data.title,
			description: this.state.data.title
		}
		
	}
	  	  
    return (
      <div>
      <DocumentMeta {...meta} />
    
      <MiddleNav  /><br />
      
     
      	
      
      	{this.props.children || <DetailsDashboard stopic={stopic} data={this.state.data} />}
      
      
      
  		
  		
      </div>
    )
  }

}

module.exports = Details