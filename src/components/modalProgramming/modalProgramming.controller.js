'use strict';

angular.module('cv')
  .controller('ModalProgrammingCtrl', function ($scope,$state,$stateParams,$resource,$location,$http,storage) {
	  
//	var Cv = $resource("http://"+$location.host()+"\\:8000/api/:id", {
	  var Cv = $resource("http://104.236.237.125"+"\\:8000/api/:id", {  
		id : '@id'
	}, {
//		'get': { method: 'GET', cache: true  },
//		'query': { method: 'GET', cache: true, isArray: true }
//		
		
	});
	
	
	if (storage.get('cv') === null) {

		getCV();
		
		
	} else {
		
		$scope.cv = storage.get('cv');
		
		  if (angular.isDefined($stateParams.into)){
	  		  
			    angular.forEach($scope.cv, function(cv) {
			        		    	
			    	if (cv.Path ===$stateParams.into ) {
			    		
			    		$scope.experiences = cv;
			    		
			    	}		    	
			    			        
			    });		  
		  }		
		
	}
	

	function getCV() {
				
		Cv.query().$promise.then(function(data) {
			
			$scope.cv = data;
			storage.set('cv',data);
			
			  if (angular.isDefined($stateParams.into)){
		  		  
				    angular.forEach($scope.cv, function(cv) {
				        		    	
				    	if (cv.Path ===$stateParams.into ) {
				    		
				    		$scope.experiences = cv;
				    		
				    	}		    	
				    			        
				    });		  
			  }			
			
		});
				
		
	}
	
		  
	  
	  $scope.languages= [{
		  'title': 'Java',
		  'rank': 5		  
	  },
	  {
		  'title': 'C',
		  'rank': 4
	  },
	  {
		  'title': 'GoLang',
		  'rank': 5
	  },
	  {
		  'title': 'JavaScript',
		  'rank': 4
			  
	  },
	  {
		  'title': 'Dart',
		  'rank': 3
	  },
	  {
		  'title': 'Ruby',
		  'rank': 3
	  },
	  {
		  'title': 'Python',
		  'rank': 2
	  },
	  {
		  'title': 'PHP',
		  'rank': 1
	  }
	  ];
	  
	  $scope.oss= [
	  {
		  'title': 'Linux',
		  'rank': 5
	  },
	  {
		  'title': 'FreeBsd',
		  'rank': 3
	  },
	  {
		  'title': 'Solaris',
		  'rank': 2
	  },
	  {
		  'title': 'Cisko IOS',
		  'rank': 2
	  }
	];
	  
	  
	  $scope.dbs= [
	         	  {
	         		  'title': 'Mysql',
	         		  'rank': 5
	         	  },
	         	  {
	         		 'title': 'Redis',
	         		'rank': 4
	         	  },
	         	  {
	         		 'title': 'Sqlite',
	         		'rank': 3
	         	  },
	         	  {
	         		  'title': 'Postegress',
	         		  'rank': 4
	         	  },
	         	  {
	         		  'title': 'Oracle',
	         		  'rank': 2
	         	  }
	         	];	  
	  
	  
	  $scope.telecoms= [
		         	  {
		         		  'title': 'Asterisk',
		         		  'rank': 5
		         	  },
		         	  {
		         		 'title': 'Kamailio',
		         		'rank': 4
		         	  },
		         	  {
		         		 'title': 'Cisko',
		         		'rank': 2
		         	  },
		         	  {
		         		  'title': 'Kannel',
		         		  'rank': 4
		         	  }
		         	];	 
	  
	  
	  $scope.webdevs= [
			         	  {
			         		  'title': 'Angularjs',
			         		  'rank': 5
			         	  },
			         	  {
			         		 'title': 'Dart',
			         		'rank': 4
			         	  },
			         	  {
			         		 'title': 'Google Web Toolkit',
			         		'rank': 2
			         	  },
			         	  {
			         		  'title': 'Ruby on Rails',
			         		  'rank': 2
			         	  },
			         	  {
			         		 'title': 'Php',
			         		'rank': 1
			         	  }
			         	];		  
	  
	  $scope.clouds= [
		         	  {
		         		  'title': 'Digital Ocean',
		         		  'rank': 5
		         	  },
		         	  {
		         		 'title': 'AWS',
		         		'rank': 5
		         	  },
		         	  {
		         		 'title': 'Rackspace',
		         		'rank': 4
		         	  },

		         	];	 

	  
	  	  	  
	  //not yet in use
	  $scope.rateFunction = function( rating )
	  {
//	         var _url = 'your service url';
	   
	   var data = {
	     rating: rating
	   };
	  }
	  
  });
	
