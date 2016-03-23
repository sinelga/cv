import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogItemDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	topic: "",
	    	stitle: "",
	    	title: ""
	    
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
//		console.log("DetailsDashboard  receive props",nextProps.data.title)
		
		this.setState({data: nextProps.data})
		this.setState({topic: nextProps.topic})
		this.setState({stitle: nextProps.stitle})

//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlTableItems =[]
//		  console.log(this.state.data)
		  var title =""
		  
		  if (Object.keys(this.state.data).length > 0) {
			  
			  Object.getOwnPropertyNames(this.state.data).forEach(function(val, idx, array) {
				  
				  if (this.state.topic === val) {
					  this.state.data[val].forEach(function(val) {
						  
						  if (this.state.stitle === val.Stitle) {
//							  console.log(val)
							  let key = val+val.Stitle
							  title = val.Title
							  let outlink = '/blog/'+this.state.topic+'/'+val.Stitle
//						  console.log(outlink)
							  htmlTableItems.push(<tr key={key}><td>{val.Contents}</td></tr>)
						  }
					  }.bind(this));	  
				  }
				  
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      <h3>{title}</h3>
      <Table responsive>
      	<tbody>
      	{htmlTableItems}
      	</tbody>
      </Table>
      
      </div>
    )
  }
}

export default BlogItemDetailsDashboard
