webpackJsonp([4],{243:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=n(17),f=n(14),p=n(13),d=(o(p),n(44)),h=o(d),b=n(244),m=o(b),y="hsl(200, 20%, 20%)",v={};v.wrapper={padding:"10px 20px",overflow:"hidden",background:y};var k="",w=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:{},mark:{}},n.loadajax=n.loadajax.bind(n),n}return l(t,e),u(t,[{key:"loadajax",value:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){if(n.status>=200&&n.status<400){var e=JSON.parse(n.responseText);t?this.setState({mark:e}):this.setState({data:e})}}.bind(this),n.onerror=function(){},n.send()}},{key:"handleReturn",value:function(){f.browserHistory.push("/")}},{key:"componentWillMount",value:function(){k=document.domain}},{key:"componentDidMount",value:function(){0===Object.keys(this.props.params).length&&(this.loadajax("/www/"+k+"/blog/blog.json",!0),this.loadajax("http://"+k+":8001/api/blog",!1))}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){var t=e.params.stopic,n=this.props.params.stopic;n!==t&&0===Object.keys(this.props.params).length&&(this.loadajax("/www/"+k+"/blog/blog.json",!0),this.loadajax("http://"+k+":8001/api/blog",!1))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.mark.Title,t=this.state.mark.Moto,n=this.state.mark.Contents,o={};return o={title:"Blog",description:"Blog programming"},c["default"].createElement("div",null,c["default"].createElement(h["default"],o),c["default"].createElement("div",{style:v.wrapper},c["default"].createElement("h2",null,"BLOG"),c["default"].createElement(s.Well,null,c["default"].createElement(s.Button,{onClick:this.handleReturn,bsStyle:"primary",bsSize:"large",className:"pull-right"},"Return"),this.props.children||c["default"].createElement(m["default"],{data:this.state.data}))),c["default"].createElement("div",{id:"background"}," ",c["default"].createElement("h3",null,e)," ",c["default"].createElement("h4",null,t),n))}}]),t}(c["default"].Component);e.exports=w},244:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=n(14),f=n(17),p=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:{}},n}return l(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data})}},{key:"render",value:function(){var e=[];return Object.keys(this.state.data).length>0&&this.state.data.forEach(function(t){var n=t.Topic,o=t.Stopic,a=o,r="/blog/"+o;e.push(c["default"].createElement("tr",{key:a},c["default"].createElement("td",null,c["default"].createElement(s.Link,{to:r},n))))}.bind(this)),c["default"].createElement("div",null,c["default"].createElement("h3",null,"Index"),c["default"].createElement(f.Table,{responsive:!0},c["default"].createElement("tbody",null,e)))}}]),t}(c["default"].Component);t["default"]=p}});