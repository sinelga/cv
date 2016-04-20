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
//		baseRef.on("value", function(snapshot) {
//
//			var items = []
//
//			snapshot.forEach(function(vdata) {
//				
//				items.push(vdata) 
//											
//			}.bind(this))
//			
//			this.setState({items:items})
//			
//		}.bind(this))
		
	}
	
	componentWillReceiveProps(nextProps){
		
//		console.log("componentWillReceiveProps Details",nextProps)
		this.setState({data:nextProps})

	}
		
	render() {
		
		var htmlitem =[]
		var key =""
		
//		console.log(Object.keys(this.state.data).length)
		
		if (Object.keys(this.state.data).length === 1) {
			
//			console.log(this.state.data.data)
//		 this.state.data.forEach(function(val) {
		this.state.data.data.map(function(val) {
			
			console.log(val)
			let link ='/'+val.link
			
//			htmlitem.push(<p>{val.title}</p>)
			htmlitem.push(<p><Link key={link} to={link}>{val.title}<FontAwesome className='pull-right' name="arrow-right" size='2x'/></Link></p>)
			
		})
		}
		
		
			
			
//		this.state.items.map(function(vvdata) {
//
//			var item_obj =vvdata.val()			
//			var htmlListItems =[]			
//			item_obj.items.map(function(data){
//
//				key =data.id+data.item
//				htmlListItems.push(<ListGroupItem key={key}>{data.item} <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={18}/></ListGroupItem>)
//				
//			})	
//			
//			let imglink = '/img/'+item_obj.img
//			let link ='/'+item_obj.link+".html"
//
//			let key2 = key+link
//			let key3 = key2+key
//
//			htmlitem.push(<h2 key={key2}>{item_obj.title}</h2>)			
//			htmlitem.push(<Row key={key3}><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={8}><ListGroup>{htmlListItems}</ListGroup></Col><Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
//				
//		})
		

    return (
      <div>
      <div style={styles.wrapper}>
      <h2>Knowlege</h2>
      	<Well>
   	  	
  			{htmlitem}
   
    	</Well>
    	</div>
      </div>
    )
  }
}

export default Dashboard
