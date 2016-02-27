webpackJsonp([1],{

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: '/:id/:moredetail',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/Details')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(2, function (require) {
							cb(null, __webpack_require__(473));
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