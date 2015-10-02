'use strict';

bookLightApp.controller('BookShelfCtrl', ['$scope','BookService', '$routeParams', 
	function ($scope, BookService, $routeParams) {
    $scope.bokaMi = "HeiHHei";


    BookService.books(function(data){
     console.log(data);
     $scope.books = data;
   });

    var getBookInfo = function () {
      if ($routeParams.bookId) {
        BookService.getBookIsbn($routeParams.bookId, function(data){
          $scope.bookInfo = data[0].volumeInfo;
          $scope.authors = $scope.bookInfo.authors.join(", ");
        });
      }
    };
    getBookInfo();


$scope.delete = function(bookID){
  var callback = function (successful){
    if (successful){
                    // add code to display successful save
                    $scope.showSuccessAlert = true;
                  }
                  else {
                    // add code to display failure
                    $scope.showErrorAlert = true;
                  }
                };
                BookService.deleteBook(bookID, callback);
              };

              $scope.borrow = function(bookID){
                var available = false; 
                var userName = 'Per Person'; 
                var callback = function (successful){
                  if (successful){
                  }
                  else {
                    // add code to display failure
                    $scope.showErrorAlert = true;  
                  }
                };
                BookService.updateBook(bookID, available, userName, callback);
              };

              $scope.returnBook = function(bookID){
                var available = true;
                var userName = undefined; 
                var callback = function (successful){
                  if (successful){
                  }
                  else {
                    // add code to display failure
                    $scope.showErrorAlert = true;  
                  }
                };
                BookService.updateBook(bookID, available, userName, callback);
              };


              $scope.isCollapsed = false;
            }]);
