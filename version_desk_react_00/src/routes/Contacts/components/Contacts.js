import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
//import Firebase from 'firebase'
import StarRating from 'react-star-rating'
import ContactsDashboard from './ContactsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

class Contacts extends React.Component {

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
      	<h1>Contacts</h1>
     
      
      	{this.props.children || <ContactsDashboard data={this.state.data} />}
      
      </Well>
      
  		</div>   	
      </div>
    )
  }

}

module.exports = Contacts