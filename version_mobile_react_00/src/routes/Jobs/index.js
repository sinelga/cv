module.exports = {
		  path: 'jobs.html',
				
//		  getChildRoutes(location, cb) {
//		    require.ensure([], (require) => {
//		      cb(null, [
//		        require('./routes/BlogItems')
//	
//		      ])
//		    })
//		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/Jobs')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}