import React from 'react'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'
//import GlobalNav from './GlobalNav'
import Dashboard from './Dashboard'
//import Head from './Head'

var site =""

class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}
	    	
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
	
	componentWillUpdate(prevProps){
			
//			console.log(Object.keys(this.props.params).length)
		
//		console.log(this.props.params,prevProps.params)
		
		let oldId = prevProps.params.stopic
		let newId = this.props.params.stopic
		
		if (newId !== oldId) {
		
			if (Object.keys(this.props.params).length > 0 ) {
				   
				 this.loadajax('/cv-mazurov-export.json',false)				 
				   
			}
		}

	}
	
	componentWillMount(){
		site =document.domain
				
	}	
	componentDidMount(){
		this.loadajax('/cv-mazurov-export.json',false)
				   
	}
	componentWillReceiveProps(prevProps){
		
		

	}
	
	
  render() {
	  
	 const meta = {
		title: 'CV',
		description: 'CV curriculum vitae'
     }
	 
	 
    return (
      <div>
      <DocumentMeta {...meta} />	 
      
      <Grid>

      	{this.props.children || <Dashboard data={this.state.data} />} 
      	
      	 
     </Grid>   
     </div>
    )
  }
}

module.exports = App
