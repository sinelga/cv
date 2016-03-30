webpackJsonp([9],{

/***/ 491:
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
					__webpack_require__.e/* nsure */(10, function (require) {
							cb(null, __webpack_require__(492));
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