'use strict';

bookLightApp.controller('BookShelfCtrl', ['$scope','BookService', '$routeParams', 
	function ($scope, BookService, $routeParams) {
   $scope.booksWithData = [];

$scope.getBooks = function(){
  console.log("Getting books first");
   BookService.books(function(data){
     console.log(data);
     $scope.books = data;

    // $scope.getBooksData($scope.books);
   });
 };
 $scope.getBooks();

  /*  BookService.books(function(data){
     console.log(data);
     $scope.books = data;
   });*/

//Get more info about a spesific book when clicking on this book 
var getBookInfo = function () {
  if ($routeParams.bookISBN) {
    BookService.getBookIsbn($routeParams.bookISBN, function(data){
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
        console.log("updating books");
         $scope.getBooks();
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
    var userName = ""; 
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
