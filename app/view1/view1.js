'use strict';
//, 'ngResource'
angular.module('myApp.view1', ['ngRoute', 'ngResource'])

.factory('DataLoader', ['$resource' , function($resource){
	return $resource('/api/', {});
	
	//$resource('/api/:id', {id: '@id'})

	// var items = {};

	// items.query = function(){
	// 	console.log('a');

	// 	return [
	// 		{ name : 'ex1', label: 'x1' },
	// 		{ name : 'ex2', label : 'x2' }
	// 	];
	// };

	// return items;
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','DataLoader', function($scope, DataLoader) {
	// console.log(DataLoader.get());

//, '$resource'
	// $http({method:'GET', url : '/api'})
	// 	.success(function(data, status, headers, config){
	// 		console.log(data);
	// 	})
	// 	.error(function(data, status, headers, config){
	// 		console.log('ERROR')
	// 	});

	// $scope.engTypeList=DataLoader.query();

	var master = [{
		name: 'EX1',
		label : 'L1'
	}];

		//DataLoader.get({});

	//$scope.engTypeList= master;//DataLoader.get();

	DataLoader.get({}).$promise.then(function(d){
		console.log(d);
		$scope.engTypeList = d.rptEngineTypeList;
	});

	$scope.saveOrUpdate = function(DataLoader){
		console.log('saveOrUpdate');
		$scope.message = 'done';
	};

	$scope.reset = function(){
		console.log('reset');
		//$scope.DataLoader = angular.copy(master);
	};

	//$scope.reset();

}]);