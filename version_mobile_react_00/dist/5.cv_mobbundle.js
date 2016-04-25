webpackJsonp([5],{

/***/ 514:
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

	var _BlogDashboard = __webpack_require__(515);

	var _BlogDashboard2 = _interopRequireDefault(_BlogDashboard);

	var _MiddleNav = __webpack_require__(516);

	var _MiddleNav2 = _interopRequireDefault(_MiddleNav);

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

	var site = "";
	var title = "";

	var Blog = function (_React$Component) {
		_inherits(Blog, _React$Component);

		function Blog(props) {
			_classCallCheck(this, Blog);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Blog).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(Blog, [{
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
				site = document.domain;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				if (Object.keys(this.props.params).length === 0) {

					//			 this.loadajax('/www/'+site+'/blog/blog.json',true)
					this.loadajax('http://' + site + ':8001/api/blog', false);
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				var oldId = prevProps.params.stopic;
				var newId = this.props.params.stopic;

				if (newId !== oldId) {
					if (Object.keys(this.props.params).length === 0) {

						//				 this.loadajax('/www/'+site+'/blog/blog.json',true)
						this.loadajax('http://' + site + ':8001/api/blog', false);
					}
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				//	var mtitle = this.state.mark.Title
				//	var mmoto  = this.state.mark.Moto
				//	var mcontents = this.state.mark.Contents

				var meta = {};
				meta = {
					title: "Blog",
					description: "Blog programming"
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(_MiddleNav2.default, null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						_reactBootstrap.Well,
						null,
						this.props.children || _react2.default.createElement(_BlogDashboard2.default, { data: this.state.data })
					)
				);
			}
		}]);

		return Blog;
	}(_react2.default.Component);

	module.exports = Blog;

/***/ },

/***/ 515:
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

				if (Object.keys(this.state.data).length > 0) {

					this.state.data.forEach(function (val) {
						//				  console.log(val)
						var topic = val.Topic;
						var stopic = val.Stopic;
						var key = stopic;
						var outlink = '/blog/' + stopic;

						htmlTableItems.push(_react2.default.createElement(
							'tr',
							{ key: key },
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: outlink },
									topic
								)
							)
						));
					}.bind(this));
				};

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

/***/ },

/***/ 516:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	//const light = 'blue'	
	var styles = {};

	//styles.wrapper = {
	//  padding: '10px 20px',
	//  overflow: 'hidden',
	//  background: dark,
	//  color: light
	//}
	styles.middletitle = {
			color: light,
			fontSize: '120%'
	};

	styles.link = {
			padding: 9,

			color: light,
			fontWeight: 200,
			fontSize: '120%'
	};

	styles.activeLink = {
			background: light,
			color: dark
	};

	var MiddleNav = function (_React$Component) {
			_inherits(MiddleNav, _React$Component);

			function MiddleNav() {
					_classCallCheck(this, MiddleNav);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(MiddleNav).apply(this, arguments));
			}

			_createClass(MiddleNav, [{
					key: 'handleReturn',
					value: function handleReturn() {
							_reactRouter.browserHistory.push('/');
					}
			}, {
					key: 'render',
					value: function render() {

							return _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
											_reactBootstrap.Row,
											null,
											_react2.default.createElement(
													_reactBootstrap.Col,
													{ xs: 6, md: 4, style: styles.middletitle },
													' BLOG'
											),
											_react2.default.createElement(
													_reactBootstrap.Col,
													{ xs: 6, md: 4 },
													_react2.default.createElement(
															_reactBootstrap.Button,
															{ onClick: this.handleReturn, bsStyle: 'primary', bsSize: 'lg' },
															'Return'
													)
											)
									)
							);
					}
			}]);

			return MiddleNav;
	}(_react2.default.Component);

	exports.default = MiddleNav;

/***/ }

});