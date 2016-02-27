webpackJsonp([1],{

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(469);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactStarRating = __webpack_require__(470);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import DocumentMeta from 'react-document-meta'


	//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
	//var baseRef = new Firebase('https://vlk-production.firebaseio.com');
	////var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
	//var baseRefClients = new Firebase('https://vlk-customers.firebaseio.com');
	//var id
	var baseRef;
	var title = '';
	//var item={}

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: {}

			};
			return _this;
		}

		_createClass(Details, [{
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log("Willmount Details", this.props.params.id);

				var dblink = 'https://cv-mazurov.firebaseio.com/';

				baseRef = new _firebase2.default(dblink);

				baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function (snapshot) {

					snapshot.forEach(function (vdata) {

						this.setState({ data: vdata.val() });
					}.bind(this));
				}.bind(this));
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				console.log("componentWillReceiveProps Details", this.props.params);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {}

			//		console.log("componentDidUpdate")

			//	handleSubmit(e) {
			//		e.preventDefault()
			//
			//		if (this.state.name !=='' && ( this.state.email !=='' || this.state.phone !=='')) {
			//		
			//			var clienttoinsert = {name: this.state.name.trim(),email: this.state.email.trim(),phone: this.state.phone.trim(),info:this.state.info.trim(),title:this.state.data.title.trim()}
			//		
			//			var now = new Date().toLocaleString();
			//			var clientRef = baseRefClients.child(now);
			//			clientRef.set(clienttoinsert)
			//			this.state.name=''
			//			this.state.email=''
			//			this.state.phone=''
			//			this.state.info=''	
			//			
			//			this.handleContactInserted()
			//			setTimeout(this.handleReturn, 7000);
			////			this.handleReturn()
			//		} else {
			//			
			//			this.handleAlertShow()
			//		}
			//
			//	 }
			//	 handleNameChange(e) {
			//		    this.setState({name: e.target.value});
			//	 }
			//	 handleEmailChange(e) {
			//		    this.setState({email: e.target.value});
			//	 }	
			//	 handlePhoneChange(e) {
			//		    this.setState({phone: e.target.value});
			//	 }
			//	 handleInfoChange(e) {
			//		    this.setState({info: e.target.value});
			//	 }	

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {

				baseRef.off();
				//		baseRefClients.off()
			}
		}, {
			key: 'render',
			value: function render() {

				var link = this.props.params.id;

				var htmlListItems = [];
				//	  var imgListItems =[]

				if (this.state.data.items !== undefined) {

					title = this.state.data.title;
					console.log(title);
					this.state.data.items.map(function (data) {
						var imglink = "img/" + link + "/" + data.img;
						var outlink = "/" + link + "/" + data.link;
						var duration = '';

						if (data.duration === 1) {
							duration = data.duration + ' year';
						} else {
							duration = data.duration + ' years';
						}

						var key = data.id;
						htmlListItems.push(_react2.default.createElement(
							_reactBootstrap.Row,
							null,
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ xs: 6, md: 2 },
								_react2.default.createElement(_reactBootstrap.Image, { src: imglink, responsive: true })
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ xs: 6, md: 4 },
								_react2.default.createElement(
									'h2',
									null,
									data.item
								),
								' ',
								_react2.default.createElement(_reactStarRating2.default, { name: 'airbnb-rating', totalStars: 5, rating: data.rating, size: 20 })
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ xs: 6, md: 1 },
								_react2.default.createElement(
									'p',
									null,
									duration
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ xs: 6, md: 3 },
								data.extra
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ xs: 6, md: 2 },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: outlink },
									_react2.default.createElement(_reactBootstrap.Image, { src: '/img/orange-arrow-right.png', responsive: true })
								)
							)
						));
					});
				}

				return _react2.default.createElement(
					'div',
					null,
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
							'Details'
						),
						_react2.default.createElement(
							'h2',
							null,
							title
						),
						htmlListItems
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ }

});