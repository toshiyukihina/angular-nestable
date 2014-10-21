'use strict';

/**
 * @ngdoc function
 * @name angularNestableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularNestableApp
 */
angular.module('angularNestableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
