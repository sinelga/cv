import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Well} from 'react-bootstrap'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark
//  color: light
}

styles.link = {
  padding: 11,
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
      <div style={styles.wrapper}>
        
      	<Well>
      	<Image src='/img/mazurovopt.jpg' responsive/>
      	<h4>Professional Programming</h4>

        </Well> 
        
      </div>
    )
  }
}


export default Head
