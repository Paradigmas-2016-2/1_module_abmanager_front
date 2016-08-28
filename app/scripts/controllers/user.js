'use strict';

/**
 * @ngdoc function
 * @name abManagerApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the abManagerApp
 */
angular.module('abManagerApp')
  .controller('UserCtrl', function ($scope, userFactory) {
  	$scope.createUser = function () {
  		if($scope.data.password != $scope.data.password_confirmation) {
  			window.alert("SENHAS DIFERENTES");
  			$scope.data.password="";
  			$scope.data.password_confirmation="";
  		} else {
  			userFactory.save({user: $scope.data}, function () {
  				$scope.data="";
  				window.alert("Conta criada com sucesso!");
  			});
  		}
  			
  	};
  });
