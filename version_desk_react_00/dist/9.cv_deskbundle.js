webpackJsonp([9],{260:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),s=o(c),f=n(14),p=n(13),d=(o(p),n(40)),m=o(d),h=n(46),y=(o(h),n(261)),v=o(y),b="https://cv-mazurov.firebaseio.com/";u=new m["default"](b);var k=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:{},mark:{}},n}return i(t,e),l(t,[{key:"handleReturn",value:function(){f.browserHistory.push("/")}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=document.domain,t="/www/"+e+"/"+this.props.params.id+"/"+this.props.params.moredetail.split(".")[0]+"/"+this.props.params.moredetail+".json",n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(){if(n.status>=200&&n.status<400){var e=JSON.parse(n.responseText);this.setState({mark:e})}}.bind(this),n.onerror=function(){},n.send(),u.orderByChild("link").equalTo(this.props.params.id).on("value",function(e){e.forEach(function(e){this.setState({data:e.val()})}.bind(this))}.bind(this))}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillUnmount",value:function(){u.off()}},{key:"render",value:function(){var e=this.state.mark.Contents;return s["default"].createElement("div",null,s["default"].createElement(v["default"],{data:this.state.data,link:this.props.params.moredetail}),s["default"].createElement("div",{id:"background"}," ",e))}}]),t}(s["default"].Component);e.exports=k},261:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),c=o(l),s=(n(14),n(40)),f=(o(s),n(46)),p=(o(f),function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:{},mark:{}},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=this;void 0===e.data.items||!function(){var n=e.link.split(".")[0];e.data.items.map(function(e){e.link===n&&this.setState({data:e})}.bind(t))}()}},{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h2",null,this.state.data.item),c["default"].createElement("h4",null,"More Details"),this.state.data.extra)}}]),t}(c["default"].Component));t["default"]=p}});