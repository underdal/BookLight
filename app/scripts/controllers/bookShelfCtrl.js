'use strict';

bookLightApp.controller('BookShelfCtrl', ['$scope','BookService', 
	function ($scope, BookService) {

    $scope.changeOffice = function(office){
      $scope.office = office;
    };
   // Setting initial office Not best practice
     var of = {office: "Oslo"};
    $scope.changeOffice(of);

var getBooks = function(){
  console.log("Getting books first");
   BookService.books(function(data){
     console.log(data);
     $scope.books = data;
   });
 };
 getBooks();


  /*  BookService.books(function(data){
     console.log(data);
     $scope.books = data;
   });*/


$scope.delete = function(bookID){
 // BookService.deleteBook(bookID, callback);
  var callback = function (successful){
    if (successful){
        // add code to display successful save
        $scope.showSuccessAlert = true;
        console.log("updating books");
         getBooks();
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
        getBooks();
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
        getBooks();
      }
      else {
        // add code to display failure
        $scope.showErrorAlert = true;  
      }
    };
    BookService.updateBook(bookID, available, userName, callback);
  };

}]);
