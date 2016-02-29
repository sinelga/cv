import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
//import Firebase from 'firebase'
import StarRating from 'react-star-rating'
import JobsDashboard from './JobsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

class Jobs extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: []

	   }
	}

	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)

		

	}	
	
	componentDidMount(){
//		console.log("Didmount Details")
		
		var request = new XMLHttpRequest();
		request.open('GET', '/jobs.json', true);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    console.log(data.jobs[0].item)
			    this.setState({data: data.jobs[0].item});
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();	
		
		
	}
	
	
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Details componentDidUpdate")
					
	}

	 componentWillUnmount(){		 

//		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {
	  
	  	  
    return (
      <div>
      <div style={styles.wrapper}> 
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	<h1>Work Expirience</h1>
     
      
      	{this.props.children || <JobsDashboard data={this.state.data} />}
      
      </Well>
      
  		</div>   	
      </div>
    )
  }

}

module.exports = Jobs