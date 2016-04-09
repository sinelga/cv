import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogItemDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	stopic: "",
	    	stitle: ""
	    
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

		var stitlesplit = nextProps.stitle.split('.')[0]

		this.setState({data: nextProps.data})
//		this.setState({topic: nextProps.topic})
		this.setState({stopic: nextProps.stopic})
		this.setState({stitle: stitlesplit})

	}	
	
	render() {

		  var topic =""
		  var title =""
		  var contents = 'First &middot; Second'	  
		  function createMarkup() { return {__html: contents}; };	  
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  Object.getOwnPropertyNames(this.state.data).forEach(function(val, idx, array) {
				  				  
				  if (this.state.stopic === val) {
					  
					  this.state.data[val].forEach(function(val) {
						  
						  if (this.state.stitle === val.Stitle) {
							  let key = val+val.Stitle
							  title = val.Title
							  topic = val.Topic
							  contents = val.Contents
						  }
					  }.bind(this));	  
				  }
				  
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      
      <h3>topic:{topic}</h3>
      <h4>{title}</h4>

      <div dangerouslySetInnerHTML={createMarkup()} />
      
      </div>
    )
  }
}

export default BlogItemDetailsDashboard
