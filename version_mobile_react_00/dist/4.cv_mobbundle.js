webpackJsonp([4],{

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(227);

	var _reactRouter = __webpack_require__(167);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDocumentMeta = __webpack_require__(492);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _DetailsDashboard = __webpack_require__(510);

	var _DetailsDashboard2 = _interopRequireDefault(_DetailsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import Firebase from 'firebase'
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

	//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com/');	
	//var item={}
	var stopic = "";

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(Details, [{
			key: 'loadajax',
			value: function loadajax(urlstr, mark) {

				var request = new XMLHttpRequest();
				request.open('GET', urlstr, true);

				request.onload = function () {

					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);

						if (mark) {
							this.setState({ mark: data });
						} else {

							this.setState({ data: data });
						}
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {

				stopic = this.props.params.stopic;
				//		console.log("Willmount Details",stopic)
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				this.loadajax('/cv-mazurov-export.json', false);
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
				//		console.log("Details componentWillUpdate")
				//		console.log(this.props.params,prevProps.params)
				//		console.log(Object.keys(this.props.params).length)

				var oldId = prevProps.params.link;
				var newId = this.props.params.link;

				if (newId !== oldId) {

					if (Object.keys(this.props.params).length === 2) {

						this.loadajax('/cv-mazurov-export.json', false);
					}
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("Details componentDidUpdate")
				//		console.log(Object.keys(this.props.params).length)
				//		let oldId = prevProps.params.stitle
				//		let newId = this.props.params.stitle
				//
				//		   if (newId !== oldId) {
				//			  
				//			   console.log(this.props.params)
				//			   if (Object.keys(this.props.params).length === 1) {
				//				  
				//				 this.loadajax('/cv-mazurov-export.json',false)
				//				
				//				  
				//				}
				//		   }

			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {

				//		baseRef.off()
			}
		}, {
			key: 'render',
			value: function render() {
				//	var contents = this.state.mark.Contents

				//	console.log(this.state.data) 

				var meta = {};

				if (this.state.data.title !== undefined) {
					//		console.log(this.state.data)
					meta = {
						title: this.state.data.title,
						description: this.state.data.title
					};
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
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
							this.props.children || _react2.default.createElement(_DetailsDashboard2.default, { stopic: stopic, data: this.state.data })
						)
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(167);

	var _reactBootstrap = __webpack_require__(227);

	var _reactFontawesome = __webpack_require__(503);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var title = '';
	var stopic = '';

	var DetailsDashboard = function (_React$Component) {
		_inherits(DetailsDashboard, _React$Component);

		function DetailsDashboard(props) {
			_classCallCheck(this, DetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailsDashboard).call(this, props));

			_this.state = {
				data: {}
			};

			return _this;
		}

		_createClass(DetailsDashboard, [{
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
				//		console.log("DetailsDashboard  receive props",nextProps.stopic)

				stopic = nextProps.stopic;
				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlListItems = [];

				//		  console.log(Object.keys(this.state.data).length)

				if (Object.keys(this.state.data).length > 0) {

					this.state.data.map(function (val) {

						if (val.link === stopic) {
							val.items.map(function (val) {
								var key = val.id;
								var outlink = "/" + stopic + "/" + val.link + ".html";

								var duration = '';

								if (val.duration === 1) {
									duration = val.duration + ' year';
								} else {
									duration = val.duration + ' years';
								}

								htmlListItems.push(_react2.default.createElement(
									_reactBootstrap.Row,
									{ key: key },
									_react2.default.createElement(
										_reactBootstrap.Col,
										{ xs: 6, md: 4 },
										_react2.default.createElement(
											'h4',
											null,
											val.item
										)
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
										{ xs: 6, md: 2 },
										_react2.default.createElement(
											_reactRouter.Link,
											{ to: outlink },
											_react2.default.createElement(_reactFontawesome2.default, { className: 'pull-right', name: 'arrow-right', size: '2x' })
										)
									)
								));
							});
						}
					});
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						title
					),
					_react2.default.createElement(
						'h3',
						null,
						'Professional skills'
					),
					htmlListItems
				);
			}
		}]);

		return DetailsDashboard;
	}(_react2.default.Component);

	exports.default = DetailsDashboard;

/***/ }

});