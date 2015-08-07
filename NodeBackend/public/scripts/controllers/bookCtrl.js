'use strict';

bookLightApp.controller('BookCtrl', ['$scope','BookService', 
	function ($scope, BookService) {
        $scope.books = BookService.books().query(function(data){
        	console.log(data);
        	return data;
        });
        

        //Filters and updates the shown elements based on string search
        $scope.updateQuery = function () {
            $scope.$broadcast('updateQuery', $scope.query ? $scope.query : '');
        };
        //Filters and updates the shown elements based on choice of location
        $scope.updateLocation = function () {
            $scope.$broadcast('updateLocation', $scope.locationQuery ? $scope.locationQuery.value : ['']);
        };
  }]);
