'use strict';

bookLightApp.controller('HeaderCtrl', ['$scope','$location', '$cookies', '$rootScope', 
	function ($scope, $location, $cookies, $rootScope) {

		$scope.logedInCookie = $cookies.get('user');
		$rootScope.countryCookie = $cookies.get('country');


			$scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};
		$rootScope.loginFunc = function(name, country){
			$cookies.put('user', name);
			$cookies.put('country', country);
			$scope.logedInCookie = $cookies.get('user');
			$rootScope.countryCookie = $cookies.get('country');
		};

	}]);


