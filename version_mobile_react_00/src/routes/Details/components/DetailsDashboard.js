import React from 'react'
import { Link } from 'react-router'
import {Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

var title =''
var stopic=''
	
class DetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}		
	    }

	}

	componentDidMount(){
						
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
//		console.log("DetailsDashboard  receive props",nextProps.stopic)
		
		stopic =nextProps.stopic
		this.setState({data: nextProps.data})
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlListItems =[]
		  
//		  console.log(Object.keys(this.state.data).length)
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  this.state.data.map(function(val) {
				  
				  if (val.link === stopic){
				  	val.items.map(function(val) {
				  	let key = val.id
				  	let outlink ="/"+stopic+"/"+ val.link+".html"
				  	
					  let duration =''
					  
					  if (val.duration === 1) {
						  duration =val.duration+' year'
					  }	else {
						  duration =val.duration+' years'
					  } 
				  		
				  	htmlListItems.push(<Row key={key}><Col xs={6} md={4}><h4>{val.item}</h4></Col><Col xs={6} md={1}><p>{duration}</p></Col><Col xs={6} md={2}><Link to={outlink}><FontAwesome className='pull-right' name="arrow-right" size='2x'/></Link></Col></Row>)	
				  	
				  
				  
				  })
				  }
				  
				  
			  })
			  
			  
		  }



    return (
      <div>

      <Well>
  	  	
  		{htmlListItems}
  		
  	</Well>	
       	        
      </div>
    )
  }
}

export default DetailsDashboard
