webpackJsonp([11],{

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import StarRating from 'react-star-rating'
	//import BlogDashboard from './BlogDashboard'

	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
		//  color: light
	};

	var BlogItems = function (_React$Component) {
		_inherits(BlogItems, _React$Component);

		function BlogItems(props) {
			_classCallCheck(this, BlogItems);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItems).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(BlogItems, [{
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
				//		
				//		var request = new XMLHttpRequest();
				//		request.open('GET', '/en_US_programming_blog.json', true);
				//		
				//		request.onload = function() {
				//			  if (request.status >= 200 && request.status < 400) {
				//			    // Success!			 
				//			    var data = JSON.parse(request.responseText);
				//			    this.setState({data: data});
				//			   
				//			  } else {
				//			    // We reached our target server, but it returned an error
				//
				//			  }
				//			}.bind(this);
				//
				//			request.onerror = function() {
				//			  // There was a connection error of some sort
				//			};
				//
				//			request.send();
				//			
				//			var requestm = new XMLHttpRequest();
				//			requestm.open('GET', '/www/'+site+'/blog/blog.html.json', true);
				//			
				//			requestm.onload = function() {
				//				  if (requestm.status >= 200 && requestm.status < 400) {
				//				    // Success!			 
				//				    var data = JSON.parse(requestm.responseText);
				//				    this.setState({mark: data});
				//				   
				//				  } else {
				//
				//				  }
				//				}.bind(this);
				//
				//				requestm.onerror = function() {
				//				  // There was a connection error of some sort
				//				};
				//
				//				requestm.send();			
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
				//	console.log(this.state.data)
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						'BLOG'
					),
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
								'Blog'
							),
							this.props.children,
							' />}'
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

		return BlogItems;
	}(_react2.default.Component);

	module.exports = BlogItems;

/***/ }

});