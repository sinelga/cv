webpackJsonp([3],{251:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(1),i=l(c),f=n(17),d=n(14),s=n(13),p=(l(s),n(44)),m=l(p),y=n(252),b=l(y),v="hsl(200, 20%, 20%)",h={};h.wrapper={padding:"10px 20px",overflow:"hidden",background:v},h.table={"margin-top":"70px"};var E=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:{}},n}return o(t,e),u(t,[{key:"handleReturn",value:function(){d.browserHistory.push("/")}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){console.log(document.domain);var e=document.domain,t=new XMLHttpRequest;t.open("GET","/www/"+e+"/contacts/contacts.html.json",!0),t.onload=function(){if(t.status>=200&&t.status<400){var e=JSON.parse(t.responseText);this.setState({data:e})}}.bind(this),t.onerror=function(){},t.send()}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.data.Contents,t={};return t={title:"Contacts",description:"Contacts freelancer"},i["default"].createElement("div",null,i["default"].createElement(m["default"],t),i["default"].createElement("div",{style:h.wrapper},i["default"].createElement("h1",null,"Contacts"),i["default"].createElement(f.Well,null,i["default"].createElement(f.Button,{onClick:this.handleReturn,bsStyle:"primary",bsSize:"large",className:"pull-right"},"Return"),i["default"].createElement("div",{style:h.table},this.props.children||i["default"].createElement(b["default"],null)))),i["default"].createElement("div",{id:"background"}," ",e))}}]),t}(i["default"].Component);e.exports=E},252:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(1),i=l(c),f=(n(14),n(17)),d=n(191),s=l(d),p=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:[]},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e){}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data})}},{key:"render",value:function(){return i["default"].createElement("div",null,i["default"].createElement(f.Table,{responsive:!0},i["default"].createElement("tbody",null,i["default"].createElement("tr",null,i["default"].createElement("td",null,i["default"].createElement(s["default"],{name:"home",size:"4x"})," "),i["default"].createElement("td",null,"Högberginkuja 1",i["default"].createElement("br",null),"10820 Lappohja",i["default"].createElement("br",null),"Finland")),i["default"].createElement("tr",null,i["default"].createElement("td",null,i["default"].createElement(s["default"],{name:"phone",size:"4x"})," "),i["default"].createElement("td",null,"+358451202801")),i["default"].createElement("tr",null,i["default"].createElement("td",null,i["default"].createElement(s["default"],{name:"envelope",size:"4x"})," "),i["default"].createElement("td",null,"support@mazurov.eu")),i["default"].createElement("tr",null,i["default"].createElement("td",null,i["default"].createElement(s["default"],{name:"skype",size:"4x"})," "),i["default"].createElement("td",null,"mazurovfi")))))}}]),t}(i["default"].Component);t["default"]=p}});