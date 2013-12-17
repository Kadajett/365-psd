'use strict';

var ctrls = angular.module('365psd.controllers', [
	'365psd.services'
	]);

ctrls.controller('AppCtrl', function($scope, $http) {
   
});

ctrls.controller('homeCtrl', function($scope, 365psdapi) {
 	var res = 365psdapi.projects({});
 	res.then(function (data) {
 		$scope.projects = data.data.response;
 	});
});