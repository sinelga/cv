webpackJsonp([2],{

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(469);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactStarRating = __webpack_require__(470);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	var _MoreDetailsDashboard = __webpack_require__(475);

	var _MoreDetailsDashboard2 = _interopRequireDefault(_MoreDetailsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'

	//import DocumentMeta from 'react-document-meta'


	var baseRef;
	var dblink = 'https://cv-mazurov.firebaseio.com/';

	baseRef = new _firebase2.default(dblink);
	//var item={}

	var MoreDetails = function (_React$Component) {
		_inherits(MoreDetails, _React$Component);

		function MoreDetails(props) {
			_classCallCheck(this, MoreDetails);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MoreDetails).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(MoreDetails, [{
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				//		console.log(this.props.params)
				var site = document.domain;

				var jsonlink = '/www/' + site + '/' + this.props.params.id + '/' + this.props.params.moredetail.split(".")[0] + '/' + this.props.params.moredetail + '.json';
				//		console.log(jsonlink)

				var requestm = new XMLHttpRequest();
				requestm.open('GET', jsonlink, true);

				requestm.onload = function () {
					if (requestm.status >= 200 && requestm.status < 400) {

						var data = JSON.parse(requestm.responseText);
						//			    console.log(data)
						this.setState({ mark: data });
					} else {}
				}.bind(this);

				requestm.onerror = function () {};

				requestm.send();

				baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function (snapshot) {

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
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("componentDidUpdate")

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
					_react2.default.createElement(_MoreDetailsDashboard2.default, { data: this.state.data, link: this.props.params.moredetail }),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						contents
					)
				);
			}
		}]);

		return MoreDetails;
	}(_react2.default.Component);

	module.exports = MoreDetails;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _firebase = __webpack_require__(469);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactStarRating = __webpack_require__(470);

	var _reactStarRating2 = _interopRequireDefault(_reactStarRating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MoreDetailsDashboard = function (_React$Component) {
		_inherits(MoreDetailsDashboard, _React$Component);

		function MoreDetailsDashboard(props) {
			_classCallCheck(this, MoreDetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MoreDetailsDashboard).call(this, props));

			_this.state = {
				data: {},
				mark: {}
			};

			return _this;
		}

		_createClass(MoreDetailsDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("MoreDetailsDashboard componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("MoreDetailsDashboard componentDidUpdate")

			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//		console.log('MoreDetailsDashboard componentWillMount',this.props)

			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				var _this2 = this;

				//		console.log("MoreDetailsDashboard  receive props",nextProps)
				if (nextProps.data.items === undefined) {} else {
					(function () {

						var link = nextProps.link.split(".")[0];

						nextProps.data.items.map(function (item) {

							if (item.link === link) {

								this.setState({ data: item });
							}
						}.bind(_this2));
					})();
				}
			}
		}, {
			key: 'render',
			value: function render() {

				//		console.log(this.state.data)

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						this.state.data.item
					),
					_react2.default.createElement(
						'h4',
						null,
						'More Details'
					),
					this.state.data.extra
				);
			}
		}]);

		return MoreDetailsDashboard;
	}(_react2.default.Component);

	exports.default = MoreDetailsDashboard;

/***/ }

});