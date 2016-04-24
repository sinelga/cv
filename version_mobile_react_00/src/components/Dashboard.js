import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
//import Firebase from 'firebase'
//import StarRating from 'react-star-rating'

const dark = 'hsl(200, 20%, 20%)'
const styles = {}

styles.wrapper = {
	padding: '10px 20px',
	overflow: 'hidden',
	background: dark
}


//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');


class Dashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}	
	    	
	    }

	}

	componentDidMount(){
						
	}	
		  
	componentWillMount(){

		
	}
	
	componentWillReceiveProps(nextProps){
		
//		console.log("componentWillReceiveProps Details",nextProps)
		this.setState({data:nextProps})

	}
		
	render() {
		
		var htmlitem =[]
//		var key =""

		
		if (Object.keys(this.state.data).length === 1) {

		this.state.data.data.map(function(val) {
			
//			console.log(val)
			let link ='/'+val.link
			htmlitem.push(<p key={link}><Link  to={link}>{val.title}<FontAwesome className='pull-right' name="arrow-right" size='2x'/></Link></p>)
			
		})
		}
		
		

    return (
      <div>
      
      <h2>Knowlege</h2>
      	<Well>
   	  	
  			{htmlitem}
   
    	</Well>
    	</div>
      
    )
  }
}

export default Dashboard
