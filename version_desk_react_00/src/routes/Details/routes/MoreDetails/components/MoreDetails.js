import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'
import MoreDetailsDashboard from './MoreDetailsDashboard'

var baseRef
var dblink='https://cv-mazurov.firebaseio.com/'
	
baseRef = new Firebase(dblink);	
//var item={}

class MoreDetails extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {}

	   }
	}

	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount MoreDetails",this.props.params.id)
		
//		var dblink='https://cv-mazurov.firebaseio.com/'
//						
//		baseRef = new Firebase(dblink);
//		
//		baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {
//
//			snapshot.forEach(function(vdata) {
//				
//				this.setState({data: vdata.val()})
//							
//								
//			}.bind(this));
//		}.bind(this))
		

	}	
	
	componentDidMount(){		
//		console.log("Didmount MoreDetails",this.props.params.id,this.props.params.moredetail)
//		 	var idlink =this.props.params.id.split(".")[0]
//		 	console.log(this.props.params.id)
//		 	console.log("idlink",this.props.params.id)
			baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
				
				this.setState({data: vdata.val()})
				
							
								
			}.bind(this));
		}.bind(this))
						   
	}
	
	componentWillReceiveProps(){
		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
	}
 
	 componentWillUnmount(){		 

		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {
	  

	  	  
    return (
      <div>
 
      <MoreDetailsDashboard data={this.state.data} link={this.props.params.moredetail} />
  		   	
      </div>
    )
  }

}

module.exports = MoreDetails