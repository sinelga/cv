import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'
import DetailsDashboard from './DetailsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}
var baseRef
//var title ='not define'
	
var dblink='https://cv-mazurov.firebaseio.com/'
		
baseRef = new Firebase(dblink);	
//var item={}
class Details extends React.Component {

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
//		console.log("Willmount Details",this.props.params.id)

		

	}	
	
	componentDidMount(){
//		console.log("Didmount Details")
		
			baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
				
				this.setState({data: vdata.val()})
//				title = vdata.val().title
															
			}.bind(this));
		}.bind(this))
		
		
		
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

		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {
	  
	  	  
    return (
      <div>
      <div style={styles.wrapper}> 
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	<h1>Details</h1>
     
      
      	{this.props.children || <DetailsDashboard data={this.state.data} />}
      
      </Well>
      
  		</div>   	
      </div>
    )
  }

}

module.exports = Details