'use strict';

angular.module('cv', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap','vesparny.fancyModal','ngPageHeadMeta','angular-responsive','angularLocalStorage'])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider,responsiveHelperProvider,$httpProvider) {
	  var device = 'ld';
	  var responsiveHelperProvider = responsiveHelperProvider.$get();
	  if (responsiveHelperProvider.isXs()) {
		  device = "xs";
		  
	  } else if (responsiveHelperProvider.isSm()){
		  
		  device = "sm";
	  } else if (responsiveHelperProvider.isMd()){
		  
		  device = "md";
	  }
	  	  	  
    $stateProvider
      .state('Home', {
        url: '/Demo.html',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data: {
      	  device: device 
        }
      }).state('Programming', {
          url: '/Programming.html',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          data: {
        	  device: device 
          },

          onEnter: function($injector){
        		var $fancyModal = $injector.get('$fancyModal'); 
        		  
				$fancyModal.open({
					templateUrl: 'components/modalProgramming/modalProgramming.html',
					controller: 'ModalProgrammingCtrl',
//					closeOnOverlayClick: false,
					openingClass: 'animated rollIn',
					closingClass: 'animated rollOut',
					openingOverlayClass: 'animated fadeIn',
					closingOverlayClass: 'animated fadeOut',
					themeClass: 'fancymodal-theme-programming',

				});
        	    
        	  }
        }).state('Experience', {
            url: '/Experience/:into',
            templateUrl: 'components/programmingDetails/programmingDetails.html',
            controller: 'ModalProgrammingCtrl',
            data: {
          	  device: device 
            },

                       
            onEnter: function($injector){
          		var $fancyModal = $injector.get('$fancyModal'); 
          		  
  				$fancyModal.open({
  					templateUrl: 'components/modalexperience/modalexperience.html',
  					controller: 'ModalProgrammingCtrl',
//  					closeOnOverlayClick: false,
  					openingClass: 'animated zoomIn',
  					closingClass: 'animated hinge',
  					openingOverlayClass: 'animated fadeIn',
  					closingOverlayClass: 'animated fadeOut',
  					themeClass: 'fancymodal-theme-programming',

  				});
          	    
          	  }
          }).state('Programming Details', {
            url: '/Programming-details.html',
            templateUrl: 'components/programmingDetails/programmingDetails.html',
            controller: 'ModalProgrammingCtrl',
            data: {
          	  device: device 
            },

        }).state('Contact', {
          url: '/Contact.html',
          templateUrl: 'app/main/main.html',
          controller: 'ModalContactCtrl',
          onEnter: function($injector){        	  
        	  
        	  var $fancyModal = $injector.get('$fancyModal');
        	  
				$fancyModal.open({
					templateUrl: 'components/modalContact/modalContact.html',
					controller: 'ModalContactCtrl',
					openingClass: 'animated rollIn',
					closingClass: 'animated rollOut',
					openingOverlayClass: 'animated fadeIn',
					closingOverlayClass: 'animated fadeOut',
					themeClass: 'fancymodal-theme-programming',

				});
        	    
        	  }
        }).state('Pdf', {
            url: '/Pdfcv.html',
            templateUrl: 'components/pdfcv/pdfcv.html'

        }).state('Goal', {
            url: '/',
            templateUrl: 'app/goal/goal.html',
            data: {
                	  device: device 
            }	

        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
//    $httpProvider.interceptors.push('httpInterceptor');
//    $httpProvider.
    
  }).run(['$location','$rootScope','$state', function($location,$rootScope,$state) {
	  	 	  
	  	$rootScope.$on('$stateChangeStart', 
			  function(event, toState, toParams, fromState, fromParams){
		  
		  if (toState.name === 'Home') {
				$rootScope.title ='Aleksander Mazurov';
	  			
	  		}  else {			
	  			$rootScope.title =toState.name;
	  		}
			  			  
		 });
	  	
	  	
		  	  
  }]);
