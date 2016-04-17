import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import DocumentMeta from 'react-document-meta'
import BlogItemDetailsDashboard from './BlogItemDetailsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var site =""
var stopic =""	
var topic =""
var stitle=""
var stitlesplit=""	

class BlogItemDetails extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	}

	loadajax(urlstr,mark){
		
		var request = new XMLHttpRequest();
		request.open('GET', urlstr, true);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    
			    if (mark) {
			    	this.setState({mark: data});
			    } else {
			    	
			    	this.setState({data: data});
			    
			    }
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();
		
	}
	
	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params)
		site =document.domain
//		topic = this.props.params.topic
		stopic = this.props.params.stopic
		stitle = this.props.params.stitle
		stitlesplit = this.props.params.stitle.split('.')[0]

	}	
	
	componentDidMount(){
//		console.log("Didmount blogItems",this.props.params)
		
//		 this.loadajax('/en_US_programming_blog.json',false)
		 this.loadajax('http://'+site+':8001/blog/'+stopic+"/"+stitlesplit,false)
		 this.loadajax('/www/'+site+'/blog/'+stopic+'/'+stitlesplit+'/'+stitle+'.json',true)
						
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {

		
	}
	
	
	componentDidUpdate(prevProps) {
		
		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
 
			   this.loadajax('http://'+site+':8001/blog/'+stopic+"/"+stitlesplit,false)
			   this.loadajax('/www/'+site+'/blog/'+topic+'/'+stitle+'/'+stitle+'.html.json',true)
			   
			   
		   }
					
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  
	  var meta ={}
	  
	  var res = stitle.split(".")[0].split("-");

	  var title =""
	   
		  res.map(function(split){
			  title = title + split+" "
			  
		  })
	  
		meta = {
			title: topic+" "+title,
			description: topic+" "+title+"details"
		}  
	var contents = this.state.mark.Contents

    return (
    	<div>
    	<DocumentMeta {...meta} />
    	  {this.props.children || <BlogItemDetailsDashboard data={this.state.data} stopic={this.props.params.stopic} stitle={this.props.params.stitle} />}
   	  		
    	  <div id="background"> {contents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = BlogItemDetails