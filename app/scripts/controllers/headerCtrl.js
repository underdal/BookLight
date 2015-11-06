'use strict';

bookLightApp.controller('HeaderCtrl', ['$scope','$location', '$rootScope', 
	function ($scope, $location, $rootScope) {
		$scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};
		$rootScope.loginFunc = function(name, country){
			$scope.userName = name;
			$scope.country = country;
		};

	}]);


