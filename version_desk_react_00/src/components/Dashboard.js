import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well} from 'react-bootstrap'
import Firebase from 'firebase'

var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');

//var languges []

class Dashboard extends React.Component {

	componentDidMount(){
	}	
		  
	componentWillMount(){
		baseRef.on("value", function(snapshot) {
			
//			console.log(snapshot)

//			var 
			snapshot.forEach(function(vdata) {
				
				
				
				if (vdata.val().hasOwnProperty("languages")) {
				
					console.log(vdata.val().languages)
					
					vdata.val().languages.map(function(vvdata) {
						
						console.log(vvdata)
					});
					
					
//					vdata.val()["languages"].forEach(function(vvdata) {
//						
//						console.log(vvdata.val())
//						
//					});
				
				}
				
				
			});
		})
		
	}
	
	
	render() {
    
		  
	  
	  

    return (
      <div>
      	<Well>
      <h2>Professional  Programming</h2>
      <Row>
      	<Col xs={6} md={4}><Image src='/img/mazurov.jpg' thumbnail responsive/></Col>
      	<Col xs={12} md={8}><p className='cvbigtitle'>CV</p><p className='name'>Mazurov Aleksander</p></Col>
      </Row>
      <h3>Languages</h3>
      <Row>
    	<Col xs={3} md={2}><Image src='/img/programming-languages-1.jpg' thumbnail responsive/></Col>
    	<Col xs={12} md={8}></Col>
    	</Row>      
      
    	</Well>           
      </div>
    )
  }
}

export default Dashboard
