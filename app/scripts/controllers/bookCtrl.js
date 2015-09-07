'use strict';

bookLightApp.controller('BookCtrl', ['$scope','BookService', 
	function ($scope, BookService) {
		
         BookService.books(function(data){
        	console.log(data);
        	$scope.books = data;	
        });


        $scope.pressedSave = function (book)
        {
        	console.log('pressed save '+book);
        	var callback = function (successful)
        	{
        		if (successful){
        			// add code to display successful save
        			alert('save object successful');
        		}
        		else {
        			// add code to display failure
        			alert('save object failure');
        		}
        	};
        	BookService.saveBook(book, callback);
        };

        

        $scope.isCollapsed = false;
  }]);
