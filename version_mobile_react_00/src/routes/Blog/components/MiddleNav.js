import React from 'react'
import { Link,browserHistory } from 'react-router'
import {Row,Col,Button,Well} from 'react-bootstrap'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
//const light = 'blue'	
const styles = {}

//styles.wrapper = {
//  padding: '10px 20px',
//  overflow: 'hidden',
//  background: dark,
//  color: light
//}
styles.middletitle= {
		color: light,		
		fontSize: '120%'
	}

styles.link = {
  padding: 9,
  
  color: light,
  fontWeight: 200,
  fontSize: '120%'
}

styles.activeLink = {
  background: light,
  color: dark
}

class MiddleNav extends React.Component {
	
	handleReturn(){
		browserHistory.push('/')
		
	}
	
	 render() {

	    return (

	        <div>
	        
	      	<Row>
      			<Col xs={6} md={4} style={styles.middletitle}> BLOG</Col>
      			<Col xs={6} md={4}><Button onClick={this.handleReturn} bsStyle="primary" bsSize="lg">Return</Button></Col>      	
      		</Row>
	        	
	        
	        </div>
	      
	    )
	  }
	}

export default MiddleNav