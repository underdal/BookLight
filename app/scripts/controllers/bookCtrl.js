'use strict';

bookLightApp.controller('BookCtrl', ['$scope','BookService', 
	function ($scope, BookService) {
		
         BookService.books(function(data){
        	console.log(data);
        	$scope.books = data;	
        });

         // $scope.deleteBook = function(bookID){
         //    var callback = function (successful){
         //        if (successful){
         //            // add code to display successful save
         //            $scope.showSuccessAlert = true;
         //        }
         //        else {
         //            // add code to display failure
         //             $scope.showErrorAlert = true;
                    
         //        }
         //    };
         //    BookService.deleteBook(bookID, callback);
         // };

        

        $scope.isCollapsed = false;
  }]);
