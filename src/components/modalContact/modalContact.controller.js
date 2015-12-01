'use strict';

angular.module('cv')
  .controller('ModalContactCtrl', function ($scope) {
	  
	  $scope.contacts = [{
		  'title':'Address',
		  'logo':'fa fa-home fa-2x',
		  'description': 'Högberginkuja 1<br>10820 Lappohja<br>Finland'
	  },
	  {
		  'title':'Phone',
		  'logo':'fa fa-phone fa-2x',
		  'description': '+358451202801'  
	  },
	  {
		  'title':'Email',
		  'logo':'fa fa-envelope fa-2x',
		  'description': 'support@mazurov.eu'  		  
	  },
	  {
		  'title':'Skype',
		  'logo':'fa fa-skype fa-2x',
		  'description': 'mazurovfi'  
	  }
			  
	  ];
	  
  });