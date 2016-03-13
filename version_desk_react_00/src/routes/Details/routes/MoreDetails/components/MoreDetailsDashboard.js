import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');
//var title =''

class MoreDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	mark: {}
	    }

	}

	componentDidMount(){
//		console.log(this.props.params)
//		console.log("MoreDetailsDashboard componentDidMount")
//		this.setState({languages: this.languages})
						
	}	
	
	componentWillUpdate(prevProps) {
//		console.log("MoreDetailsDashboard componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("MoreDetailsDashboard componentDidUpdate")
					
	}
	
	
	
	componentWillMount(){
//		console.log('MoreDetailsDashboard componentWillMount',this.props)
		
	}
	componentWillReceiveProps(nextProps){
//		console.log("MoreDetailsDashboard  receive props",nextProps)
		if ( nextProps.data.items === undefined) {
			
//			console.log("NO items")
			
		} else {
			
//			console.log("OK items")
			
			let link = nextProps.link.split(".")[0]
		
			nextProps.data.items.map(function(item){
			
			if (item.link === link){

				this.setState({data: item})
			}
			
		}.bind(this))
			
			
			
		}
		
//		let link = nextProps.link.split(".")[0]
//		
//		nextProps.data.items.map(function(item){
//			
//			if (item.link === link){
//
//				this.setState({data: item})
//			}
//			
//		}.bind(this))
		
	}
	
	render() {
		

    return (
      <div>
      	
      	<h2> MoreDetailsDashbord</h2>
  	  	
  	     {this.state.data.extra}
   
    	        
      </div>
    )
  }
}

export default MoreDetailsDashboard
