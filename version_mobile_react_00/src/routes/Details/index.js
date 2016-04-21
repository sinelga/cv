module.exports = {
		  path: ':stopic',
				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/MoreDetails')
	
		      ])
		    })
		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/Details')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}