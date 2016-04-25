import React from 'react'
import { Link } from 'react-router'
import {Row,Col} from 'react-bootstrap'

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

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context)
//    this.logOut = this.logOut.bind(this)
  }


  render() {

    return (

        <div>
      	<Row>
			<Col xs={4} md={4}><Link to="/" style={styles.link}>Home</Link></Col>
			<Col xs={4} md={4}><Link to="/jobs.html" style={styles.link} activeStyle={styles.activeLink}>Work</Link></Col> 
			<Col xs={4} md={4}><Link to="/contacts.html" style={styles.link} activeStyle={styles.activeLink}>Contact</Link></Col>
			
		</Row>     

         
        </div>
      
    )
  }
}


export default GlobalNav
