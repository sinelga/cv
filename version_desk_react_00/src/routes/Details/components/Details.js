import React from 'react'
import {Button,Thumbnail,Grid,Image,Label,Well,Input,ButtonInput, Row,Col,Alert } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'

//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
//var baseRef = new Firebase('https://vlk-production.firebaseio.com');
////var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
//var baseRefClients = new Firebase('https://vlk-customers.firebaseio.com');
//var id
var baseRef

class Details extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
//	    data: {},
//	    name: '',
//	    email: '',
//	    phone: '',
//	    info: '',
//	    alertVisible: false,
//	    contactInserted: false
	   }

//	  this.handleSubmit = this.handleSubmit.bind(this)
//	  this.handleNameChange = this.handleNameChange.bind(this)
//	  this.handleEmailChange = this.handleEmailChange.bind(this)
//	  this.handlePhoneChange = this.handlePhoneChange.bind(this)
//	  this.handleInfoChange = this.handleInfoChange.bind(this)
//	  
//	  this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
//	  this.handleAlertShow = this.handleAlertShow.bind(this)
//	  
//	  this.handleContactNotInserted = this.handleContactNotInserted.bind(this)
//	  this.handleContactInserted = this.handleContactInserted.bind(this)	  
	}
	
//	handleAlertDismiss() {
//		    this.setState({alertVisible: false});
//	}
//
//	handleAlertShow() {
//		    this.setState({alertVisible: true});
//	}	
//
//	handleContactNotInserted() {
//	    this.setState({contactInserted: false});
//	}
//
//	handleContactInserted() {
//	    this.setState({contactInserted: true});
//	}	
//	
//	handleReturn(){
//		browserHistory.push('/')
//		
//	}
		
	componentWillMount(){
		console.log("Willmount Details",this.props.params.id)
		
		var dblink=''
		if (this.props.params.id ==='languages') {
			dblink = 'https://cv-mazurov.firebaseio.com/0/languages'
			
		} if (this.props.params.id ==='frameworks') {
			
			dblink = 'https://cv-mazurov.firebaseio.com/1/frameworks'
			
		}
		
		baseRef = new Firebase(dblink);
		
		baseRef.on("value", function(snapshot) {

			console.log(snapshot.val())
			
			snapshot.forEach(function(vdata) {
				
				console.log(vdata)
				
//				if (vdata.val().hasOwnProperty("languages")) {
//
//					this.setState({languages: vdata.val().languages })
//				
//				}
//				if (vdata.val().hasOwnProperty("frameworks")) {
//
//					this.setState({frameworks: vdata.val().frameworks})
//				
//				}				
				
								
			}.bind(this));
		}.bind(this))
		

	}	
	
	componentDidMount(){		

//		console.log("componentDidMount details",this.props.params)
//		id = this.props.params.id
//		var obj = {}
//		baseRef.orderByChild("id").equalTo(id).on("value", function(snapshot) {
//
//			snapshot.forEach(function(snapshot) {
//
//				obj = {
//					id: snapshot.val().id, title: snapshot.val().title, details: snapshot.val().details
//				}
//				return
//				
//			})			  
//			this.setState({data: obj})  
//		}.bind(this));
//		
						   
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

	  var title = this.props.params.id
//	  var data = this.state.data
//	  var imgactivity = "/img/activity/"+data.id+".jpg"

//	  
//	  const meta = {
//		      title: "data.Moto",
//	}
//	  
//	  var alarm = []
//	  if (this.state.alertVisible) {
//		   
//		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={4000}>Необходимо ввести имя и номер телефона или емаил!</Alert>)
//		  
//	  }
//	  if (this.state.contactInserted) {
//		   
//		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleContactNotInserted} dismissAfter={4000}>Ваши данные успешно введены!</Alert>)
//		  
//	  }	  
	  
	  
    return (
      <div>
      <Well>
      <h1>Details</h1>
      <h2>{title}</h2>
      
      </Well>
      
  		   	
      </div>
    )
  }

}

module.exports = Details