webpackJsonp([3],{

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(167);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _MoreDetailsDashboard = __webpack_require__(508);

	var _MoreDetailsDashboard2 = _interopRequireDefault(_MoreDetailsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'

	//import DocumentMeta from 'react-document-meta'
	//import Firebase from 'firebase'
	//import StarRating from 'react-star-rating'


	var stopic = "";
	var link = '';

	var MoreDetails = function (_React$Component) {
		_inherits(MoreDetails, _React$Component);

		function MoreDetails(props) {
			_classCallCheck(this, MoreDetails);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MoreDetails).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(MoreDetails, [{
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
				//		console.log(this.props.params)
				stopic = this.props.params.stopic;
				link = this.props.params.link;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				this.loadajax('/cv-mazurov-export.json', false);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				console.log("more componentWillReceiveProps Details", this.props.params);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("MoreDetails componentDidUpdate")

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
				//		baseRefClients.off()
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_MoreDetailsDashboard2.default, { data: this.state.data, stopic: stopic, link: link })
				);
			}
		}]);

		return MoreDetails;
	}(_react2.default.Component);

	module.exports = MoreDetails;

/***/ },

/***/ 508:
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

	//import Firebase from 'firebase'
	//import StarRating from 'react-star-rating'

	var stopic = "";
	var link = '';

	var MoreDetailsDashboard = function (_React$Component) {
		_inherits(MoreDetailsDashboard, _React$Component);

		function MoreDetailsDashboard(props) {
			_classCallCheck(this, MoreDetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MoreDetailsDashboard).call(this, props));

			_this.state = {
				data: {}
				//	    	mark: {}
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

				stopic = nextProps.stopic;
				link = nextProps.link;
				this.setState({ data: nextProps.data });
			}
		}, {
			key: 'render',
			value: function render() {
				var htmlListItems = [];
				//		console.log(this.state.data)

				if (Object.keys(this.state.data).length > 0) {

					this.state.data.map(function (val) {

						if (val.link === stopic) {
							val.items.map(function (val) {
								var linkshot = link.split(".")[0];
								if (val.link === linkshot) {
									var key = val.link;
									var imglink = "/img/" + stopic + "/" + val.img;
									htmlListItems.push(_react2.default.createElement(
										'div',
										{ key: key },
										_react2.default.createElement(_reactBootstrap.Image, { src: imglink, responsive: true }),
										val.extra
									));
								}
							});
						}
					});
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						null,
						'More Details'
					),
					htmlListItems
				);
			}
		}]);

		return MoreDetailsDashboard;
	}(_react2.default.Component);

	exports.default = MoreDetailsDashboard;

/***/ }

});