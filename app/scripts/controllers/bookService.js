'use strict';

bookLightApp.service('BookService',
	['$resource', '$http','booksResource', function($resource, $http, booksResource){

	this.books = function(callback, param){
		var query = new Parse.Query("books");

	    if( query && query.length > 0){
	    	query.equalTo("office", param);
	    };
	    query.find().
			  then(function(response) {
			  	
			  	callback(response);
			  });
	

	    //return $resource(booksResource);
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