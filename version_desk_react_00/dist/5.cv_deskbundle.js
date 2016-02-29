webpackJsonp([5],{

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactStarRating = __webpack_require__(470);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	var _JobsDashboard = __webpack_require__(480);

	var _JobsDashboard2 = _interopRequireDefault(_JobsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import DocumentMeta from 'react-document-meta'
	//import Firebase from 'firebase'


	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
		//  color: light
	};
	//var baseRef
	////var title ='not define'
	//	
	//var dblink='https://cv-mazurov.firebaseio.com/'
	//		
	//baseRef = new Firebase(dblink);	
	//var item={}

	var Jobs = function (_React$Component) {
		_inherits(Jobs, _React$Component);

		function Jobs(props) {
			_classCallCheck(this, Jobs);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jobs).call(this, props));

			_this.state = {
				data: {}

			};
			return _this;
		}

		_createClass(Jobs, [{
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

				//			baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {
				//
				//			snapshot.forEach(function(vdata) {
				//				
				//				this.setState({data: vdata.val()})
				////				title = vdata.val().title
				//															
				//			}.bind(this));
				//		}.bind(this))

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
			value: function componentWillUnmount() {

				//		baseRef.off()
				//		baseRefClients.off()
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					null,
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
								'Work'
							),
							this.props.children || _react2.default.createElement(_JobsDashboard2.default, { data: this.state.data })
						)
					)
				);
			}
		}]);

		return Jobs;
	}(_react2.default.Component);

	module.exports = Jobs;

/***/ },

/***/ 480:
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

	var _firebase = __webpack_require__(469);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactStarRating = __webpack_require__(470);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');
	var title = '';

	var JobsDashboard = function (_React$Component) {
		_inherits(JobsDashboard, _React$Component);

		function JobsDashboard(props) {
			_classCallCheck(this, JobsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JobsDashboard).call(this, props));

			_this.state = {
				data: {}

			};

			return _this;
		}

		_createClass(JobsDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {

				//		console.log("DetailsDashboard componentDidMount")
				//		this.setState({languages: this.languages})

			}
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

				//		this.setState({data: nextProps.data})
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlListItems = [];
				//		  var imgListItems =[]

				//		  if (this.state.data.items !== undefined) {
				//			  var link = this.state.data.link
				//	         
				//			  title = this.state.data.title
				//			  console.log(title)
				//			  this.state.data.items.map(function(data) {
				//				  let imglink = "img/"+link+"/"+data.img
				//				  let outlink ="/"+link+"/"+ data.link
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
						'h2',
						null,
						' JobsDashbord'
					)
				);
			}
		}]);

		return JobsDashboard;
	}(_react2.default.Component);

	exports.default = JobsDashboard;

/***/ }

});