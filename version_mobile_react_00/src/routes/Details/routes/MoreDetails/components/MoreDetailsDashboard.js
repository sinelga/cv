import React from 'react'
import { Link } from 'react-router'
import {Image,Row,Col} from 'react-bootstrap'
//import Firebase from 'firebase'
//import StarRating from 'react-star-rating'

var stopic =""
var link =''
	
class MoreDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}
//	    	mark: {}
	    }

	}

	componentDidMount(){
						
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
		
		stopic =nextProps.stopic
		link = nextProps.link
		this.setState({data: nextProps.data})


	}
	
	render() {
		var htmlListItems =[]		
		
		 if (Object.keys(this.state.data).length > 0) {
			
			 this.state.data.map(function(val) {
				 
				 if (val.link === stopic){
					  	val.items.map(function(val) {
					  		let linkshot = link.split(".")[0]
					  		if (val.link === linkshot){
					  			let key = val.link
					  			let imglink = "/img/"+stopic+"/"+val.img
//					  			htmlListItems.push(<div key={key}><Image src={imglink} responsive/>{val.extra}</div>)
					  			htmlListItems.push(<Row><Col xs={4} md={4}></Col></Row>)
					  		 
					  		}
					  		
					  	})
				 }
			 
				 
			 })
			 
			 
			 
		 }
		
		
		
		

    return (
      <div>
      	
      	
      	<h4>More Details</h4>
  	  	
      	{htmlListItems}
   
    	        
      </div>
    )
  }
}

export default MoreDetailsDashboard
