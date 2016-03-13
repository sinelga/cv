webpackJsonp([5],{

/***/ 483:
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

	var _DetailsDashboard = __webpack_require__(484);

	var _DetailsDashboard2 = _interopRequireDefault(_DetailsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import DocumentMeta from 'react-document-meta'

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

	var baseRef = new _firebase2.default('https://cv-mazurov.firebaseio.com/');
	//var item={}

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: {},
				mark: {}

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
				//		console.log("Willmount Details",this.props.params.id)

			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var idlink = this.props.params.id.split(".")[0];

				//		console.log(this.props.params)

				if (this.props.params.moredetail === undefined) {

					var jsonlink = '/www/remotejob.work/' + idlink + '/' + idlink + '.html.json';
					console.log(jsonlink);

					var requestm = new XMLHttpRequest();
					requestm.open('GET', jsonlink, true);

					requestm.onload = function () {
						if (requestm.status >= 200 && requestm.status < 400) {
							// Success!			 
							var data = JSON.parse(requestm.responseText);
							this.setState({ mark: data });
						} else {
							// We reached our target server, but it returned an error

						}
					}.bind(this);

					requestm.onerror = function () {
						// There was a connection error of some sort
					};

					requestm.send();
				}

				baseRef.orderByChild("link").equalTo(idlink).on("value", function (snapshot) {

					snapshot.forEach(function (vdata) {

						this.setState({ data: vdata.val() });
					}.bind(this));
				}.bind(this));
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

				baseRef.off();
				//		baseRefClients.off()
			}
		}, {
			key: 'render',
			value: function render() {
				var contents = this.state.mark.Contents;

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
								'Details'
							),
							this.props.children || _react2.default.createElement(_DetailsDashboard2.default, { data: this.state.data })
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

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ },

/***/ 484:
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

				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlListItems = [];
				//		  var imgListItems =[]

				if (this.state.data.items !== undefined) {
					var link = this.state.data.link;

					title = this.state.data.title;
					console.log(title);
					this.state.data.items.map(function (data) {
						var imglink = "img/" + link + "/" + data.img;
						var outlink = "/" + link + "/" + data.link + ".html";
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
						'h2',
						null,
						' DetailsDashbord'
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