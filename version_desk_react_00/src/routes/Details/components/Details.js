import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
//var baseRef = new Firebase('https://vlk-production.firebaseio.com');
////var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
//var baseRefClients = new Firebase('https://vlk-customers.firebaseio.com');
//var id
var baseRef
var title =''
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
		console.log("Willmount Details",this.props.params.id)
		
		var dblink='https://cv-mazurov.firebaseio.com/'
						
		baseRef = new Firebase(dblink);
		
		baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
				
				this.setState({data: vdata.val()})
							
								
			}.bind(this));
		}.bind(this))
		

	}	
	
	componentDidMount(){		
	
						   
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
//	handleSubmit(e) {
//		e.preventDefault()
// 
//		if (this.state.name !=='' && ( this.state.email !=='' || this.state.phone !=='')) {
//		
//			var clienttoinsert = {name: this.state.name.trim(),email: this.state.email.trim(),phone: this.state.phone.trim(),info:this.state.info.trim(),title:this.state.data.title.trim()}
//		
//			var now = new Date().toLocaleString();
//			var clientRef = baseRefClients.child(now);
//			clientRef.set(clienttoinsert)
//			this.state.name=''
//			this.state.email=''
//			this.state.phone=''
//			this.state.info=''	
//			
//			this.handleContactInserted()
//			setTimeout(this.handleReturn, 7000);
////			this.handleReturn()
//		} else {
//			
//			this.handleAlertShow()
//		}
//
//	 }
//	 handleNameChange(e) {
//		    this.setState({name: e.target.value});
//	 }
//	 handleEmailChange(e) {
//		    this.setState({email: e.target.value});
//	 }	 
//	 handlePhoneChange(e) {
//		    this.setState({phone: e.target.value});
//	 }
//	 handleInfoChange(e) {
//		    this.setState({info: e.target.value});
//	 }	 
	 componentWillUnmount(){		 

		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {

	  
	  var link = this.props.params.id
	  
	  var htmlListItems =[]
//	  var imgListItems =[]

	  if (this.state.data.items !== undefined) {
          
		  title = this.state.data.title
		  console.log(title)
		  this.state.data.items.map(function(data) {
			  let imglink = "img/"+link+"/"+data.img
			  let outlink = data.link
//			  console.log(imglink)
			  var key =data.id
			  htmlListItems.push(<Row><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={6}><h2>{data.item}</h2> <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={20}/></Col><Col xs={6} md={2}>{data.extra}</Col><Col xs={6} md={2}><Link to={outlink}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
//			  imgListItems.push(<ListGroupItem key={key}></ListGroupItem>)
			  
		  })
		  
		  
	  }

	  	  
    return (
      <div>
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	<h1>Details</h1>
      	<h2>{title}</h2>
      
      {htmlListItems}
      
      </Well>
      
  		   	
      </div>
    )
  }

}

module.exports = Details