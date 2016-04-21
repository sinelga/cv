module.exports = {
		  path: '/:stopic/:link',

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/MoreDetails')
		    		  
		      )

		    })
		  }
		}