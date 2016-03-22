webpackJsonp([8],{

/***/ 486:
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

	var _JobsDashboard = __webpack_require__(487);

	var _JobsDashboard2 = _interopRequireDefault(_JobsDashboard);

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

	var Jobs = function (_React$Component) {
		_inherits(Jobs, _React$Component);

		function Jobs(props) {
			_classCallCheck(this, Jobs);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jobs).call(this, props));

			_this.state = {
				data: [],
				mark: {}

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
				var site = document.domain;

				var request = new XMLHttpRequest();
				request.open('GET', '/jobs.json', true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						this.setState({ data: data.jobs[0].item });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();

				var requestm = new XMLHttpRequest();
				requestm.open('GET', '/www/' + site + '/jobs/jobs.html.json', true);

				requestm.onload = function () {
					if (requestm.status >= 200 && requestm.status < 400) {
						// Success!			 
						var data = JSON.parse(requestm.responseText);
						//				    console.log(data)
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
				//	console.log(contents)
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
								'Work Expirience'
							),
							this.props.children || _react2.default.createElement(_JobsDashboard2.default, { data: this.state.data })
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

		return Jobs;
	}(_react2.default.Component);

	module.exports = Jobs;

/***/ },

/***/ 487:
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
				data: []

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

				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];

				this.state.data.map(function (data) {
					var key = data.title + data.duration;
					htmlTableItems.push(_react2.default.createElement(
						'tr',
						{ key: key },
						_react2.default.createElement(
							'td',
							null,
							data.title
						),
						_react2.default.createElement(
							'td',
							null,
							data.duration
						),
						_react2.default.createElement(
							'td',
							null,
							data.position
						),
						_react2.default.createElement(
							'td',
							null,
							data.details
						),
						_react2.default.createElement(
							'td',
							null,
							data.location
						),
						_react2.default.createElement(
							'td',
							null,
							data.country
						)
					));
				});

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						' JobsDashbord'
					),
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ responsive: true },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'Company'
								),
								_react2.default.createElement(
									'th',
									null,
									'Duration'
								),
								_react2.default.createElement(
									'th',
									null,
									'Position'
								),
								_react2.default.createElement(
									'th',
									null,
									'Details'
								),
								_react2.default.createElement(
									'th',
									null,
									'Location'
								),
								_react2.default.createElement(
									'th',
									null,
									'Country'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							htmlTableItems
						)
					)
				);
			}
		}]);

		return JobsDashboard;
	}(_react2.default.Component);

	exports.default = JobsDashboard;

/***/ }

});