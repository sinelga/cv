import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');


class Dashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	languages: [],
	    	frameworks: []
	    	
	    }

	}

	componentDidMount(){
		
//		console.log("this.languages",languages)
//		this.setState({languages: this.languages})
						
	}	
		  
	componentWillMount(){
		baseRef.on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
								
				
				if (vdata.val().hasOwnProperty("languages")) {
				
					console.log(vdata.val().languages)
					this.setState({languages: vdata.val().languages })
				
				}
				if (vdata.val().hasOwnProperty("frameworks")) {
					
					console.log(vdata.val().frameworks)
					this.setState({frameworks: vdata.val().frameworks})
				
				}				
				
								
			}.bind(this));
		}.bind(this))
		
	}
	
	
	render() {
		
		var languages= []
		var languages_link ="/languages"
			
		var frameworks = []
		var frameworks_link ="/frameworks"
		
		this.state.languages.map(function(vvdata) {
			console.log("vvdata",vvdata)
			let rating = vvdata.rating
			
			languages.push(<ListGroupItem key={vvdata.id}>{vvdata.language}  <StarRating name="airbnb-rating" totalStars={10} rating={rating} size={25}/></ListGroupItem>)
			
		})
		this.state.frameworks.map(function(vvdata) {
			console.log("vvdata",vvdata)
			let rating = vvdata.rating
			frameworks.push(<ListGroupItem key={vvdata.id}>{vvdata.framework}  <StarRating name="airbnb-rating" totalStars={10} rating={rating} size={25}/></ListGroupItem>)
		})	  
		

    return (
      <div>
      <Well>
      <h2>Professional  Programming</h2>

      <Row>
      	<Col xs={6} md={4}><Image src='/img/mazurov.jpg' thumbnail responsive/></Col>
      	<Col xs={12} md={8}><p className='cvbigtitle'>CV </p>(curriculum vitae)<p className='name'>Mazurov Aleksander</p><h3>Latest Activity</h3></Col>
      </Row>
            
      <Row>
  		<Col xs={6} md={2}></Col>
  		<Col xs={6} md={8}><h3>Languages</h3></Col>
  		<Col xs={6} md={2}><h3>Details</h3></Col>     
      </Row> 
      
      <Row >
    	<Col xs={6} md={2}><Image src='/img/Programming.png' responsive/></Col>
    	<Col xs={6} md={8}><ListGroup>{languages}</ListGroup></Col>
    	<Col xs={6} md={2}><Link to={languages_link}><Image src='/img/orange-arrow-right.png'  responsive/></Link></Col>
      </Row>      

      <Row>
		<Col xs={6} md={2}></Col>
		<Col xs={6} md={8}><h3>Frameworks</h3></Col>
		<Col xs={6} md={2}><h3>Details</h3></Col>     
	  </Row> 
    
      <Row >
  		<Col xs={6} md={2}><Image src='/img/gears-framework-transparent.png' responsive/></Col>
  	    <Col xs={6} md={8}><ListGroup>{frameworks}</ListGroup></Col>
  	    <Col xs={6} md={2}><Link to={frameworks_link}><Image src='/img/orange-arrow-right.png'  responsive/></Link></Col>
      </Row>      
      
    	</Well>           
      </div>
    )
  }
}

export default Dashboard
