'use strict';

angular.module('cv')
  .controller('MainCtrl', function ($scope,$rootScope,$state,$fancyModal,$http,$location,storage,$resource) {
	  	  
	   
	  if (!angular.isUndefined($state.current.data)) {
		 var device = $state.current.data.device;
		  
	  }
	  
	$rootScope.$on('$fancyModal.opened', function (e, $modal) {
		
				
		if (device ==='ld' && $state.current.name !== 'Experience') {
						
			$modal.find('.fancymodal-content').css('max-width','40%');	
									
		}
       
	});

	$rootScope.$on('$fancyModal.closed', function (e, id) {
			
		if (device ==='ld') {
			$state.go("Programming Details");
		} else {
			
			$state.go("Home");
		}	
				
		
	});
		
	
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      },      
      {
    	  'title': 'Nginx',
    	  'url': 'http://nginx.org/en/',
    	  'description': 'Nginx is an HTTP and reverse proxy server, as well as a mail proxy server',
    	  'logo': '800px-Nginx-logo.png'
      },     
      {
          'title': 'Digital Ocean',
          'url': 'https://www.digitalocean.com',
          'description': 'Digital Ocean is the simplest cloud hosting provider to launch your SSD cloud server',
          'logo': 'DO.png'
      },
      {
          'title': 'Font Awesome',
          'url': 'http://fortawesome.github.io/Font-Awesome/',
          'description': 'Font Awesome gives you scalable vector icons that can instantly be customized.',
          'logo': 'fontawesome.png'
      }     
      
      
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
