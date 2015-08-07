'use strict';

bookLightApp.controller('BookCtrl', ['$scope','BookService', 
	function ($scope, BookService) {
         BookService.books(function(data){
        	console.log(data);
        	$scope.books = data;
        });

        $scope.isCollapsed = false;
  }]);
