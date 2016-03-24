webpackJsonp([12],{

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: ':stitle',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/BlogItemDetails')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(13, function (require) {
							cb(null, __webpack_require__(494));
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