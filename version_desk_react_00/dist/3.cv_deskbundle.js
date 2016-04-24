webpackJsonp([3],{

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(221);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDocumentMeta = __webpack_require__(472);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _BlogItemDetailsDashboard = __webpack_require__(488);

	var _BlogItemDetailsDashboard2 = _interopRequireDefault(_BlogItemDetailsDashboard);

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

	var site = "";
	var stopic = "";
	var topic = "";

	var stitle = "";
	var title = "";
	var stitlesplit = "";

	var BlogItemDetails = function (_React$Component) {
		_inherits(BlogItemDetails, _React$Component);

		function BlogItemDetails(props) {
			_classCallCheck(this, BlogItemDetails);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetails).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(BlogItemDetails, [{
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
				stopic = this.props.params.stopic;
				stitle = this.props.params.stitle;
				stitlesplit = this.props.params.stitle.split('.')[0];
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				this.loadajax('/www/' + site + '/blog/' + stopic + '/' + stitlesplit + '/' + stitle + '.json', true);
				this.loadajax('http://' + site + ':8001/api/blog/' + stopic + "/" + stitlesplit, false);
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

				var oldId = prevProps.params.stitle;
				var newId = this.props.params.stitle;

				if (newId !== oldId) {
					this.loadajax('/www/' + site + '/blog/' + topic + '/' + stitle + '/' + stitle + '.html.json', true);
					this.loadajax('http://' + site + ':8001/api/blog/' + stopic + "/" + stitlesplit, false);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var meta = {};

				//	  console.log(Object.keys(this.state.data).length)

				if (Object.keys(this.state.data).length > 0) {

					console.log(this.state.data);
					topic = this.state.data.Topic;
					title = this.state.data.Title;
				}

				var mtitle = this.state.mark.Title;
				var mmoto = this.state.mark.Moto;
				var mcontents = this.state.mark.Contents;

				meta = {
					title: topic + " " + topic + " " + title,
					description: mtitle + " " + mmoto
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					this.props.children || _react2.default.createElement(_BlogItemDetailsDashboard2.default, { data: this.state.data, stopic: this.props.params.stopic, stitle: this.props.params.stitle }),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						_react2.default.createElement(
							'h3',
							null,
							mtitle
						),
						' ',
						_react2.default.createElement(
							'h4',
							null,
							mmoto
						),
						mcontents
					)
				);
			}
		}]);

		return BlogItemDetails;
	}(_react2.default.Component);

	module.exports = BlogItemDetails;

/***/ },

/***/ 488:
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

	var red = 'red';
	var styles = {};

	styles.redtopic = {

		color: red
	};

	var BlogItemDetailsDashboard = function (_React$Component) {
		_inherits(BlogItemDetailsDashboard, _React$Component);

		function BlogItemDetailsDashboard(props) {
			_classCallCheck(this, BlogItemDetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetailsDashboard).call(this, props));

			_this.state = {
				data: {},
				stopic: "",
				stitle: ""

			};

			return _this;
		}

		_createClass(BlogItemDetailsDashboard, [{
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

				var stitlesplit = nextProps.stitle.split('.')[0];

				this.setState({ data: nextProps.data });
				this.setState({ stopic: nextProps.stopic });
				this.setState({ stitle: stitlesplit });
			}
		}, {
			key: 'render',
			value: function render() {

				var topic = "";
				var title = "";
				var contents = '';
				function createMarkup() {
					return { __html: contents };
				};

				if (Object.keys(this.state.data).length > 0) {

					var key = this.state.data.Stitle;
					title = this.state.data.Title;
					topic = this.state.data.Topic;
					contents = this.state.data.Contents;
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ style: styles.redtopic },
						'topic: ',
						topic
					),
					_react2.default.createElement(
						'h4',
						null,
						title
					),
					_react2.default.createElement('div', { dangerouslySetInnerHTML: createMarkup() })
				);
			}
		}]);

		return BlogItemDetailsDashboard;
	}(_react2.default.Component);

	exports.default = BlogItemDetailsDashboard;

/***/ }

});