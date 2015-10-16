'use strict';

bookLightApp.controller('BookShelfCtrl', ['$scope','BookService', '$routeParams', 
	function ($scope, BookService, $routeParams) {
   $scope.booksWithData = [];


   BookService.books(function(data){
     console.log(data);
     $scope.books = data;
    // $scope.getBooksData($scope.books);
   });
/* this part collects data from the google api after getting the id's from crowsource. This is not working at the mmoment 
  $scope.getBooksData = function(data){
    var booksWithData = data;
    console.log($scope.booksWithData);
    for(var i = 0; i< $scope.booksWithData.length; i++){
      BookService.getBookIsbn($scope.booksWithData[i].id, function(data){
        console.log("ÅÅÅ");
        console.log($scope.booksWithData);
        var info = data[0].volumeInfo;
        //$scope.booksWithData[0].bookData =[];
        booksWithData[i].bookData = info;
        console.log($scope.booksWithData[i]);
      });
    }
    $scope.books = booksWithData;
  };*/

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
