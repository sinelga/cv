import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');
var title =''

class DetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}	

	    	
	    }

	}

	componentDidMount(){
		
//		console.log("DetailsDashboard componentDidMount")
//		this.setState({languages: this.languages})
						
	}	
	
	componentWillUpdate(prevProps) {
//		console.log("DetailsDashboard componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("DetailsDashboard componentDidUpdate")
					
	}
	
	
	
	componentWillMount(){

		
	}
	componentWillReceiveProps(nextProps){
//		console.log("DetailsDashboard  receive props",nextProps.data.title)
		
		this.setState({data: nextProps.data})
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlListItems =[]
//		  var imgListItems =[]

		  if (this.state.data.items !== undefined) {
			  var link = this.state.data.link
	          
			  title = this.state.data.title
			  console.log(title)
			  this.state.data.items.map(function(data) {
				  let imglink = "img/"+link+"/"+data.img
				  let outlink ="/"+link+"/"+ data.link
				  let duration =''
				  
				  if (data.duration === 1) {
					  duration =data.duration+' year'
				  }	else {
					  duration =data.duration+' years'
				  }  
				  	  
				  var key =data.id
				  htmlListItems.push(<Row><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={4}><h2>{data.item}</h2> <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={20}/></Col><Col xs={6} md={1}><p>{duration}</p></Col><Col xs={6} md={3}>{data.extra}</Col><Col xs={6} md={2}><Link to={outlink}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
				  
			  })		  
			  
		  }

    return (
      <div>
      	
      	<h2> DetailsDashbord</h2>
  	  	
  		{htmlListItems}
   
    	        
      </div>
    )
  }
}

export default DetailsDashboard
