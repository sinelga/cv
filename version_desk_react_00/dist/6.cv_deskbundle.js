webpackJsonp([6],{

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BlogDashboard = __webpack_require__(482);

	var _BlogDashboard2 = _interopRequireDefault(_BlogDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import StarRating from 'react-star-rating'


	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
		//  color: light
	};

	var Blog = function (_React$Component) {
		_inherits(Blog, _React$Component);

		function Blog(props) {
			_classCallCheck(this, Blog);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Blog).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(Blog, [{
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//		console.log("Willmount Details",this.props.params.id)

			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("Didmount Details")
				var site = document.domain;
				//		
				var request = new XMLHttpRequest();
				request.open('GET', '/en_US_programming_blog.json', true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						this.setState({ data: data });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
				//			
				var requestm = new XMLHttpRequest();
				requestm.open('GET', '/www/' + site + '/blog/blog.html.json', true);

				requestm.onload = function () {
					if (requestm.status >= 200 && requestm.status < 400) {
						// Success!			 
						var data = JSON.parse(requestm.responseText);
						this.setState({ mark: data });
					} else {}
				}.bind(this);

				requestm.onerror = function () {
					// There was a connection error of some sort
				};

				requestm.send();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("Details componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("Details componentDidUpdate")

			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var contents = this.state.mark.Contents;
				//	console.log(this.state.data)
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						'BLOG'
					),
					_react2.default.createElement(
						'div',
						{ style: styles.wrapper },
						_react2.default.createElement(
							_reactBootstrap.Well,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.handleReturn, bsStyle: 'primary', bsSize: 'large', className: 'pull-right' },
								'Return'
							),
							_react2.default.createElement(
								'h1',
								null,
								'Blog'
							),
							this.props.children || _react2.default.createElement(_BlogDashboard2.default, { data: this.state.data })
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						contents
					)
				);
			}
		}]);

		return Blog;
	}(_react2.default.Component);

	module.exports = Blog;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(218);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlogDashboard = function (_React$Component) {
		_inherits(BlogDashboard, _React$Component);

		function BlogDashboard(props) {
			_classCallCheck(this, BlogDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogDashboard).call(this, props));

			_this.state = {
				data: {}
			};

			return _this;
		}

		_createClass(BlogDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("DetailsDashboard componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("DetailsDashboard componentDidUpdate")

			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				//		console.log("DetailsDashboard  receive props",nextProps.data.title)

				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];
				//		  console.log(this.state.data)

				if (Object.keys(this.state.data).length > 0) {

					Object.getOwnPropertyNames(this.state.data).forEach(function (val, idx, array) {
						//				  console.log(val + ' -> ' + this.state.data[val]);
						var key = val;
						var outlink = '/blog/' + val + ".html";
						htmlTableItems.push(_react2.default.createElement(
							'tr',
							{ key: key },
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: outlink },
									val
								)
							)
						));
					}.bind(this));
				};

				//		  if (this.state.data.items !== undefined) {
				//			  var link = this.state.data.link
				//	         
				//			  title = this.state.data.title
				//	
				//			  this.state.data.items.map(function(data) {
				//				  let imglink = "img/"+link+"/"+data.img
				//				  let outlink ="/"+link+"/"+ data.link+".html"
				//				  let duration =''
				//				 
				//				  if (data.duration === 1) {
				//					  duration =data.duration+' year'
				//				  }	else {
				//					  duration =data.duration+' years'
				//				  } 
				//				  	 
				//				  var key =data.id
				//				  htmlListItems.push(<Row><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={4}><h2>{data.item}</h2> <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={20}/></Col><Col xs={6} md={1}><p>{duration}</p></Col><Col xs={6} md={3}>{data.extra}</Col><Col xs={6} md={2}><Link to={outlink}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
				//				 
				//			  })		 
				//			 
				//		  }

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						'Index'
					),
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ responsive: true },
						_react2.default.createElement(
							'tbody',
							null,
							htmlTableItems
						)
					)
				);
			}
		}]);

		return BlogDashboard;
	}(_react2.default.Component);

	exports.default = BlogDashboard;

/***/ }

});