'use strict';

bookLightApp.controller('NewbookCtrl', ['$scope', '$rootScope', '$http', '$resource', 'BookService',
    function ($scope, $rootScope, $http, $resource, BookService) {

    var debounce ={};
    $scope.formTitle="";
    $scope.formImgSrc ="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97140&w=100&h=140";


    $scope.offices = [
    {
    	office: 'Oslo'
    },
    {
    	office: 'Stockholm'
    },
    {
    	office: 'Berlin'
    },
    {
    	office: 'Hamburg'
    },
    {
    	office: 'London'
    },
    {
    	office: 'Munich'
    },
    {
    	office: 'Helsinki'
    }
    ];

    function callbackForBooks(data){
        $scope.matchingBooks = data;

    }
     
    //listen for change on "$scope.formTitle"
   $scope.titleInputDidChange = function(){
    /*var now = moment();
    if(now - lasttime > 1000){
       $scope.matchingBooks = BookService.getBookData($scope.formTitle,callbackForBooks); 
    }
    lasttime = now;*/
    clearTimeout(debounce);
    debounce = setTimeout(function(){$scope.matchingBooks = BookService.getBookData($scope.formTitle,callbackForBooks); }, 600);
    
    
   };
    $scope.addNewbookJSON = function(titleName, authorName, location, bookCover){

        var dataObj = {
            title: titleName,
            author: authorName,
            office: location,
            image: bookCover 
        };
        BookService.books().save(dataObj);
        //var res = $resource.post(addNewBook, dataObj);
        //res.success(function(data){
        //    $rootScope.$broadcast('updateBooks', data);
        //});

    };
    $scope.changeValue = function(bookInfo){
        $scope.formTitle = bookInfo.volumeInfo.title;
        $scope.formAuthor = bookInfo.volumeInfo.authors[0]; 
        $scope.formImgSrc = bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.smallThumbnail : "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97140&w=100&h=140";
        $scope.matchingBooks =[];

        console.log(bookInfo.volumeInfo);
    };

    //add delete book 
  
  }]);
