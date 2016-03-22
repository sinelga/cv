webpackJsonp([10],{

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: 'blog/:topic',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/BlogItems')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(11, function (require) {
							cb(null, __webpack_require__(491));
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