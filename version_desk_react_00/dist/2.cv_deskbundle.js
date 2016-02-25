webpackJsonp([2],{

/***/ 472:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import DocumentMeta from 'react-document-meta'


	//var baseRef = new Firebase('https://vlk-firebase.firebaseio.com');
	//var baseRef = new Firebase('https://vlk-production.firebaseio.com');
	////var baseRefClients = new Firebase('https://vlk-clients.firebaseio.com');
	//var baseRefClients = new Firebase('https://vlk-customers.firebaseio.com');
	//var id
	var baseRef;

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {}
			//	    data: {},
			//	    name: '',
			//	    email: '',
			//	    phone: '',
			//	    info: '',
			//	    alertVisible: false,
			//	    contactInserted: false


			//	  this.handleSubmit = this.handleSubmit.bind(this)
			//	  this.handleNameChange = this.handleNameChange.bind(this)
			//	  this.handleEmailChange = this.handleEmailChange.bind(this)
			//	  this.handlePhoneChange = this.handlePhoneChange.bind(this)
			//	  this.handleInfoChange = this.handleInfoChange.bind(this)
			//	 
			//	  this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
			//	  this.handleAlertShow = this.handleAlertShow.bind(this)
			//	 
			//	  this.handleContactNotInserted = this.handleContactNotInserted.bind(this)
			//	  this.handleContactInserted = this.handleContactInserted.bind(this)	 
			;return _this;
		}

		//	handleAlertDismiss() {
		//		    this.setState({alertVisible: false});
		//	}
		//
		//	handleAlertShow() {
		//		    this.setState({alertVisible: true});
		//	}	
		//
		//	handleContactNotInserted() {
		//	    this.setState({contactInserted: false});
		//	}
		//
		//	handleContactInserted() {
		//	    this.setState({contactInserted: true});
		//	}	
		//	
		//	handleReturn(){
		//		browserHistory.push('/')
		//		
		//	}

		_createClass(Details, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log("Willmount Details", this.props.params.id);

				var dblink = '';
				if (this.props.params.id === 'languages') {
					dblink = 'https://cv-mazurov.firebaseio.com/0/languages';
				}if (this.props.params.id === 'frameworks') {

					dblink = 'https://cv-mazurov.firebaseio.com/1/frameworks';
				}

				baseRef = new _firebase2.default(dblink);

				baseRef.on("value", function (snapshot) {

					console.log(snapshot.val());

					snapshot.forEach(function (vdata) {

						console.log(vdata);

						//				if (vdata.val().hasOwnProperty("languages")) {
						//
						//					this.setState({languages: vdata.val().languages })
						//				
						//				}
						//				if (vdata.val().hasOwnProperty("frameworks")) {
						//
						//					this.setState({frameworks: vdata.val().frameworks})
						//				
						//				}				
					}.bind(this));
				}.bind(this));
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				//		console.log("componentDidMount details",this.props.params)
				//		id = this.props.params.id
				//		var obj = {}
				//		baseRef.orderByChild("id").equalTo(id).on("value", function(snapshot) {
				//
				//			snapshot.forEach(function(snapshot) {
				//
				//				obj = {
				//					id: snapshot.val().id, title: snapshot.val().title, details: snapshot.val().details
				//				}
				//				return
				//				
				//			})			 
				//			this.setState({data: obj}) 
				//		}.bind(this));
				//		

			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				console.log("componentWillReceiveProps Details", this.props.params);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {}

			//		console.log("componentDidUpdate")

			//	handleSubmit(e) {
			//		e.preventDefault()
			//
			//		if (this.state.name !=='' && ( this.state.email !=='' || this.state.phone !=='')) {
			//		
			//			var clienttoinsert = {name: this.state.name.trim(),email: this.state.email.trim(),phone: this.state.phone.trim(),info:this.state.info.trim(),title:this.state.data.title.trim()}
			//		
			//			var now = new Date().toLocaleString();
			//			var clientRef = baseRefClients.child(now);
			//			clientRef.set(clienttoinsert)
			//			this.state.name=''
			//			this.state.email=''
			//			this.state.phone=''
			//			this.state.info=''	
			//			
			//			this.handleContactInserted()
			//			setTimeout(this.handleReturn, 7000);
			////			this.handleReturn()
			//		} else {
			//			
			//			this.handleAlertShow()
			//		}
			//
			//	 }
			//	 handleNameChange(e) {
			//		    this.setState({name: e.target.value});
			//	 }
			//	 handleEmailChange(e) {
			//		    this.setState({email: e.target.value});
			//	 }	
			//	 handlePhoneChange(e) {
			//		    this.setState({phone: e.target.value});
			//	 }
			//	 handleInfoChange(e) {
			//		    this.setState({info: e.target.value});
			//	 }	

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {

				baseRef.off();
				//		baseRefClients.off()
			}
		}, {
			key: 'render',
			value: function render() {

				var title = this.props.params.id;
				//	  var data = this.state.data
				//	  var imgactivity = "/img/activity/"+data.id+".jpg"

				//	 
				//	  const meta = {
				//		      title: "data.Moto",
				//	}
				//	 
				//	  var alarm = []
				//	  if (this.state.alertVisible) {
				//		  
				//		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissAfter={4000}>Необходимо ввести имя и номер телефона или емаил!</Alert>)
				//		 
				//	  }
				//	  if (this.state.contactInserted) {
				//		  
				//		  alarm.push(<Alert bsStyle="danger" onDismiss={this.handleContactNotInserted} dismissAfter={4000}>Ваши данные успешно введены!</Alert>)
				//		 
				//	  }	 

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Well,
						null,
						_react2.default.createElement(
							'h1',
							null,
							'Details'
						),
						_react2.default.createElement(
							'h2',
							null,
							title
						)
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ }

});