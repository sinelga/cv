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

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(220),
	    childRoutes: [__webpack_require__(484), __webpack_require__(493), __webpack_require__(495), __webpack_require__(498), __webpack_require__(502)]
	  }]
	}; /*eslint-disable no-unused-vars */


	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(221);

	var _reactDocumentMeta = __webpack_require__(472);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _GlobalNav = __webpack_require__(479);

	var _GlobalNav2 = _interopRequireDefault(_GlobalNav);

	var _Dashboard = __webpack_require__(480);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Head = __webpack_require__(483);

	var _Head2 = _interopRequireDefault(_Head);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(App, [{
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {}
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
						_react2.default.createElement(_GlobalNav2.default, null),
						_react2.default.createElement(_Head2.default, null),
						this.props.children || _react2.default.createElement(_Dashboard2.default, null)
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark,
	  color: light
	};

	styles.link = {
	  padding: 11,
	  color: light,
	  fontWeight: 200
	};

	styles.activeLink = {

	  background: light,
	  color: dark
	};

	var GlobalNav = function (_React$Component) {
	  _inherits(GlobalNav, _React$Component);

	  function GlobalNav(props, context) {
	    _classCallCheck(this, GlobalNav);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GlobalNav).call(this, props, context));

	    _this.logOut = _this.logOut.bind(_this);
	    return _this;
	  }

	  _createClass(GlobalNav, [{
	    key: 'logOut',
	    value: function logOut() {
	      alert('log out');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;


	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          'div',
	          { style: { float: 'left' } },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', style: styles.link },
	            'Home'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/jobs.html', style: styles.link, activeStyle: styles.activeLink },
	            'Work Expirience'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/contacts.html', style: styles.link, activeStyle: styles.activeLink },
	            'Contact'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/blog', style: styles.link, activeStyle: styles.activeLink },
	            'Blog'
	          ),
	          ' ',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/cvpdf.html', style: styles.link, activeStyle: styles.activeLink },
	            'CV in PDF'
	          ),
	          ' '
	        )
	      );
	    }
	  }]);

	  return GlobalNav;
	}(_react2.default.Component);

	//GlobalNav.defaultProps = {
	//  user: {
	//    id: 1,
	//    name: 'Ryan Florence'
	//  }
	//}

	exports.default = GlobalNav;

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

	var _reactBootstrap = __webpack_require__(221);

	var _firebase = __webpack_require__(481);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactStarRating = __webpack_require__(482);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
	};

	var baseRef = new _firebase2.default('https://cv-mazurov.firebaseio.com');

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));

			_this.state = {
				items: []

			};

			return _this;
		}

		_createClass(Dashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				baseRef.on("value", function (snapshot) {

					var items = [];

					snapshot.forEach(function (vdata) {

						items.push(vdata);
					}.bind(this));

					this.setState({ items: items });
				}.bind(this));
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlitem = [];
				var key = "";

				this.state.items.map(function (vvdata) {

					var item_obj = vvdata.val();
					var htmlListItems = [];
					item_obj.items.map(function (data) {

						key = data.id + data.item;
						htmlListItems.push(_react2.default.createElement(
							_reactBootstrap.ListGroupItem,
							{ key: key },
							data.item,
							' ',
							_react2.default.createElement(_reactStarRating2.default, { name: 'airbnb-rating', totalStars: 5, rating: data.rating, size: 18 })
						));
					});

					var imglink = '/img/' + item_obj.img;
					var link = '/' + item_obj.link + ".html";

					var key2 = key + link;
					var key3 = key2 + key;

					htmlitem.push(_react2.default.createElement(
						'h2',
						{ key: key2 },
						item_obj.title
					));
					htmlitem.push(_react2.default.createElement(
						_reactBootstrap.Row,
						{ key: key3 },
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 2 },
							_react2.default.createElement(_reactBootstrap.Image, { src: imglink, responsive: true })
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 8 },
							_react2.default.createElement(
								_reactBootstrap.ListGroup,
								null,
								htmlListItems
							)
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ xs: 6, md: 2 },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: link },
								_react2.default.createElement(_reactBootstrap.Image, { src: '/img/orange-arrow-right.png', responsive: true })
							)
						)
					));
				});

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

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(221);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	  //  color: light
	};

	styles.link = {
	  padding: 11,
	  color: light,
	  fontWeight: 200
	};

	styles.activeLink = {

	  background: light,
	  color: dark
	};

	var Head = function (_React$Component) {
	  _inherits(Head, _React$Component);

	  function Head() {
	    _classCallCheck(this, Head);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Head).apply(this, arguments));
	  }

	  _createClass(Head, [{
	    key: 'componentDidMount',


	    //  constructor(props, context) {
	    //    super(props, context)
	    //   
	    //  }

	    value: function componentDidMount() {
	      //		console.log("Didmount Head",this.props)

	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(prevProps) {
	      //		console.log("Head componentWillUpdate",prevProps)	
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {

	      //		console.log("Head componentDidUpdate",prevProps)

	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //    const { user } = this.props
	      var link = '/jobs.html';

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          _reactBootstrap.Well,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 3 },
	              _react2.default.createElement(_reactBootstrap.Image, { src: '/img/freelancer_transp.png', responsive: true })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 7 },
	              _react2.default.createElement(
	                'h3',
	                null,
	                'Professional Programming'
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 2 },
	              _react2.default.createElement(_reactBootstrap.Image, { src: '/img/free_for_job.png', responsive: true })
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 4 },
	              _react2.default.createElement(_reactBootstrap.Image, { src: '/img/mazurov.jpg', thumbnail: true, responsive: true })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 6 },
	              _react2.default.createElement(
	                'p',
	                { className: 'cvbigtitle' },
	                'CV '
	              ),
	              '(curriculum vitae)',
	              _react2.default.createElement(
	                'p',
	                { className: 'name' },
	                'Mazurov Aleksander'
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 6, md: 2 },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: link },
	                _react2.default.createElement(_reactBootstrap.Image, { src: '/img/orange-arrow-right.png', responsive: true })
	              ),
	              _react2.default.createElement(
	                'h4',
	                null,
	                'Work Experience'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Head;
	}(_react2.default.Component);

	//GlobalNav.defaultProps = {
	//  user: {
	//    id: 1,
	//    name: 'Ryan Florence'
	//  }
	//}

	exports.default = Head;

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'blog',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(1, function (require) {
							cb(null, [__webpack_require__(485)]);
					});
			},
			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(5, function (require) {
							cb(null, __webpack_require__(491));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'cvpdf.html',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/MoreDetails')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(6, function (require) {
							cb(null, __webpack_require__(494));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'jobs.html',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/MoreDetails')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(7, function (require) {
							cb(null, __webpack_require__(496));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'contacts.html',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/MoreDetails')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(8, function (require) {
							cb(null, __webpack_require__(499));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: ':id',

			getChildRoutes: function getChildRoutes(location, cb) {
					__webpack_require__.e/* nsure */(9, function (require) {
							cb(null, [__webpack_require__(503)]);
					});
			},
			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(11, function (require) {
							cb(null, __webpack_require__(506));
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