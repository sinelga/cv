'use strict';

angular.module('cv')
  .controller('NavbarCtrl', function ($scope,$state) {
    $scope.date = new Date();
    
    $scope.statename =$state.current.name;
            
  });
