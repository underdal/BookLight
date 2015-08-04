'use strict';

bookLightApp.service('BookService',
	['$resource', '$http','booksResource', 'addNewBookUrl', function($resource, $http, booksResource, addNewBookUrl){

	this.books = function(){
	    return $resource(booksResource);
	};
	this.addNewBook = function(){
		return $resource(addNewBookUrl);
	};

	this.getBookData = function(query, callback){
		//Get json from http books...
		if( query && query.length > 0){
			// +query
			$http.get('https://www.googleapis.com/books/v1/volumes?q='+query).
			  then(function(response) {
			  	callback(response.data.items);
			  }, function(response) {
			  	return ["No books found..."];
			  });
				}else
				return [];
	}

}]);