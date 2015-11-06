'use strict';

bookLightApp.controller('BookInfoCtrl', ['$scope','BookService', '$routeParams', 
	function ($scope, BookService, $routeParams) {
    $scope.available = false;


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
}]);
