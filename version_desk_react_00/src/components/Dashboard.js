import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

	const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');


class Dashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	items: []	
	    	
	    }

	}

	componentDidMount(){
						
	}	
		  
	componentWillMount(){
		baseRef.on("value", function(snapshot) {

			var items = []

			snapshot.forEach(function(vdata) {
				
				items.push(vdata) 
											
			}.bind(this))
			
			this.setState({items:items})
			
		}.bind(this))
		
	}
	
	
	render() {
		
		var htmlitem =[]
		var htmlListItems =[]
				
		this.state.items.map(function(vvdata) {

			var item_obj =vvdata.val()
			htmlListItems =[]
			
			item_obj.items.map(function(data){
				var key =data.id + data.item
				htmlListItems.push(<ListGroupItem >{data.item}  <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={18}/></ListGroupItem>)
				
			})	
									
			htmlitem.push(<h2>{item_obj.title}</h2>)
			
			var imglink = '/img/'+item_obj.img
			var link ='/'+item_obj.link+".html"

			htmlitem.push(<Row><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={8}><ListGroup>{htmlListItems}</ListGroup></Col><Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
				
		})
		

    return (
      <div>
      <div style={styles.wrapper}>
      	<Well>
   	  	
  			{htmlitem}
   
    	</Well>
    	</div>
      </div>
    )
  }
}

export default Dashboard
