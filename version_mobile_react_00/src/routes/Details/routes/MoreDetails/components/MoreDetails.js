import React from 'react'
import {Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
//import Firebase from 'firebase'
//import StarRating from 'react-star-rating'
import MoreDetailsDashboard from './MoreDetailsDashboard'


var stopic =""
var link =''
	
class MoreDetails extends React.Component {

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
//		console.log(this.props.params)
		stopic = this.props.params.stopic
		link = this.props.params.link

	}	
	
	componentDidMount(){		
		
		this.loadajax('/cv-mazurov-export.json',false)


						   
	}
	
	componentWillReceiveProps(){
		console.log("more componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("MoreDetails componentDidUpdate")
		
		
//		let oldId = prevProps.params.stitle
//		let newId = this.props.params.stitle
//
//		   if (newId !== oldId) {
//			   
//			   console.log(this.props.params)
//			   if (Object.keys(this.props.params).length === 1) {
//				   
//				 this.loadajax('/cv-mazurov-export.json',false)
//				 
//				   
//				}
//		   }
					
	}
 
	 componentWillUnmount(){		 

//		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {
	  
	
	  	  
    return (
      <div>
      	<Well>
      		<MoreDetailsDashboard data={this.state.data} stopic={stopic} link={link} />
      	</Well>	
      </div>
    )
  }

}

module.exports = MoreDetails