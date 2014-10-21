'use strict';

/**
 * @ngdoc function
 * @name angularNestableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNestableApp
 */
angular.module('angularNestableApp')
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.items = [{ 
        item: 'a',
        children: [{
          item: 'a-1',
          children: []
        }]
      }, {
        item: 'b',
        children: []
      }];
    }]);
