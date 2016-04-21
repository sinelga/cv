webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactRouter = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(226),
	    childRoutes: [

	    //      require('./routes/Blog'),  
	    //      require('./routes/Cvpdf'),           
	    //      require('./routes/Jobs'),
	    //      require('./routes/Contacts'),
	    __webpack_require__(505)]
	  }]
	}; /*eslint-disable no-unused-vars */


	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(227);

	var _reactDocumentMeta = __webpack_require__(492);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _Dashboard = __webpack_require__(504);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import GlobalNav from './GlobalNav'


	//import Head from './Head'

	var site = "";

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = {
				data: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(App, [{
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
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {

				if (Object.keys(this.props.params).length === 1) {

					this.loadajax('/cv-mazurov-export.json', false);
				}
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				site = document.domain;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.loadajax('/cv-mazurov-export.json', false);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(prevProps) {}
		}, {
			key: 'render',
			value: function render() {

				var meta = {
					title: 'CV',
					description: 'CV curriculum vitae'
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(
						_reactBootstrap.Grid,
						null,
						this.props.children || _react2.default.createElement(_Dashboard2.default, { data: this.state.data })
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 504:
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

	//import Firebase from 'firebase'
	//import StarRating from 'react-star-rating'

	var dark = 'hsl(200, 20%, 20%)';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
	};

	//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));

			_this.state = {
				data: {}

			};

			return _this;
		}

		_createClass(Dashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {

				//		console.log("componentWillReceiveProps Details",nextProps)
				this.setState({ data: nextProps });
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlitem = [];
				//		var key =""

				if (Object.keys(this.state.data).length === 1) {

					this.state.data.data.map(function (val) {

						//			console.log(val)
						var link = '/' + val.link;
						htmlitem.push(_react2.default.createElement(
							'p',
							{ key: link },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: link },
								val.title,
								_react2.default.createElement(_reactFontawesome2.default, { className: 'pull-right', name: 'arrow-right', size: '2x' })
							)
						));
					});
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ style: styles.wrapper },
						_react2.default.createElement(
							'h2',
							null,
							'Knowlege'
						),
						_react2.default.createElement(
							_reactBootstrap.Well,
							null,
							htmlitem
						)
					)
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: ':stopic',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(2, function (require) {
							cb(null, [__webpack_require__(506)]);
					});
			},
			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(4/* empty */, function (require) {
							cb(null, __webpack_require__(509));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ }

});