'use strict';

bookLightApp.controller('LoginCtrl', ['$scope','$location', 'BookService', '$rootScope', 
	function ($scope, $location, BookService, $rootScope) {
        console.log($location);
        //$rootScope.userName = "Anlaug Underdal";
       
       $scope.showLogin = function(show){
       	$scope.login = show;
       };

       $scope.register = function(email, name, pwd, pwd2){
       	if(pwd === pwd2){
       		BookService.registerUser(email,name, pwd).then(function(){
       			$rootScope.loggedIn = name;
       		});
       	}
       };
       $scope.login = function(email, pwd, name){
       	console.log(pwd);
       	console.log(email);
       	console.log(name);
       	$rootScope.loginFunc(name, "Oslo");
       	$location.path('#/');
       	console.log($rootScope.userName);
       	//BookService.login(email, pwd).then(function(){
       	//	$rootScope.loggedIn = name;
       	//});
       	
       };
  }]);