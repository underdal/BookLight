'use strict';

bookLightApp.controller('NewbookCtrl', ['$scope', '$rootScope', '$http', '$resource', 'BookService',
  function ($scope, $rootScope, $http, $resource, BookService) {

    var debounce ={};
    $scope.formTitle="";
    var defaultImage = "https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97140&w=100&h=140"; 
    $scope.formImgSrc = defaultImage; 


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


  $(document).click(function(){
    $("#bookDropdown").slideUp(); 
  });

  $("#bookDropdown").click(function(e){
   e.stopPropagation(); 
 });


    //listen for change on "$scope.formTitle"
    $scope.titleInputDidChange = function(){
      var titleInput = $scope.formTitle;
      var newTitleInput ="";
      for (var i =0; i<titleInput.length; i++) {
        if(titleInput[i] === " "){
          newTitleInput += "%20";
        }else{
          newTitleInput += titleInput[i];
        }
      }
      console.log(newTitleInput);
    /*var now = moment();
    if(now - lasttime > 1000){
       $scope.matchingBooks = BookService.getBookData($scope.formTitle,callbackForBooks); 
    }
    lasttime = now;*/
    clearTimeout(debounce);
    debounce = setTimeout(function(){$scope.matchingBooks = BookService.getBookData(newTitleInput,callbackForBooks); }, 600);

  };

/*  $scope.addNewbook = function (titleName, ID, ISBN){

   var dataObj = {
      id: ID,
      isbn: ISBN,
      owner: "Anlaug Underdal",
         available: true
       };
       console.log('pressed save ' + titleName);
       var callback = function (successful)
       {
        if (successful){
                    // add code to display successful save
                    $scope.showSuccessAlert = true;
                  }
                  else {
                    // add code to display failure
                    $scope.showErrorAlert = true;
                    
                  }
                };
                BookService.saveBook(dataObj, callback);
            // clear form
            $scope.formTitle = null;
            $scope.formAuthor = null; 
            $scope.formIsbn = null; 
            $scope.fornID = null;
            $scope.formImgSrc = defaultImage;
            $scope.matchingBooks =[];
            $scope.formDescription = null;
          }; */

  $scope.addNewbook = function (titleName, authorName, ISBN, location, bookCover){

    var dataObj = {
      title: titleName,
      author: authorName,
      isbn: ISBN,
         //office: location,
        // description: bookDescription,
         cover: bookCover, 
         available: true
       };
       console.log('pressed save '+titleName);
       var callback = function (successful)
       {
        if (successful){
                    // add code to display successful save
                    $scope.showSuccessAlert = true;
                  }
                  else {
                    // add code to display failure
                    $scope.showErrorAlert = true;
                    
                  }
                };
                BookService.saveBook(dataObj, callback);
            // clear form
            $scope.formTitle = null;
            $scope.formAuthor = null; 
            $scope.formIsbn = null; 
            $scope.formImgSrc = defaultImage;
            $scope.matchingBooks =[];
            $scope.formDescription = null;
          };

        //var res = $resource.post(addNewBook, dataObj);
        //res.success(function(data){
        //    $rootScope.$broadcast('updateBooks', data);
        //});


$scope.changeValue = function(bookInfo){
  console.log($scope.matchingBooks);
  $scope.formTitle = bookInfo.volumeInfo.title;
  $scope.formAuthor = bookInfo.volumeInfo.authors[0]; 
  $scope.formIsbn = bookInfo.volumeInfo.industryIdentifiers[0].identifier;
  $scope.formImgSrc = bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.smallThumbnail : defaultImage;
  $scope.matchingBooks =[];
  $scope.formDescription = bookInfo.volumeInfo.description;
  for(var i =0; i < bookInfo.volumeInfo.industryIdentifiers.length; i++){
    if(bookInfo.volumeInfo.industryIdentifiers[i].type === ("ISBN_13"  || "ISBN 13")){
      $scope.formIsbn = bookInfo.volumeInfo.industryIdentifiers[i].identifier;
      break;
    }
  }
  console.log(bookInfo.volumeInfo);
};

    //add delete book 

  }]);
