import React from 'react'
import { Link } from 'react-router'
import {Row,Col,Image,Well} from 'react-bootstrap'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}


styles.link = {
  padding: 10,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  
  background: light,
  color: dark
}


class Head extends React.Component {

//  constructor(props, context) {
//    super(props, context)
//    
//  }

	componentDidMount(){		
//		console.log("Didmount Head",this.props)
		
	}
	componentWillUpdate(prevProps) {
//		console.log("Head componentWillUpdate",prevProps)	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Head componentDidUpdate",prevProps)
					
	}
	
	
  render() {
//    const { user } = this.props
    let link = '/jobs.html'

    return (
              
      	<Well>
      	
      	<Row>
      		<Col xs={6} md={4}><Image src='/img/mazurovopt.jpg' thumbnail responsive/></Col>
      		<Col xs={6} md={4}>Professional Programming</Col>      	
      	</Row>
      	<Row>
  		<Col xs={6} md={4}><Image src='/img/Free-lancer.png' responsive /></Col>
  		
  		<Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive /></Link></Col>
  		</Row>     	
  

        </Well> 
        
      
    )
  }
}


export default Head
