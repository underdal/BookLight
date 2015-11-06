'use strict';

bookLightApp.service('BookService',
	['$resource', '$http', function($resource, $http){

	this.books = function(callback, param){
		var query = new Parse.Query("books");

	    if( query && query.length > 0){
	    	query.equalTo("office", param);
	    }
	    query.find().
			  then(function(response) {
			  	
			  	callback(response);
			  });
	

	    //return $resource(booksResource);
	};

	/** 
	Creates new a new parse object of class TestBook. 
	Find out how the object to be saved can be passed into this function
	e.g. in parameter 'book' as shown below or maybe the parse object
	can be retrieved from this.books via an index or key?
	If not wanting to use parse, the POST or UPDATE calls can substitute the 
	the testBook.save... call, while still using the same callback function with 
	a desired input value corresponding to a success/failure.
	*/
	this.saveBook = function (book, callback) {
	
		var Books = Parse.Object.extend("books");
		var books = new Books(book);

		books.save(null, {
			success: function ()
			{
				callback(true);
			},
			error : function ()
			{
				callback(false);
			}
		});
	};

	this.deleteBook = function(bookID, callback){
		var Books = Parse.Object.extend("books");
		var query = new Parse.Query(Books);

		query.get(bookID, {
			success: function(toBeDeleted){
				toBeDeleted.destroy({});
				callback(query);
			},
			error: function(err){
				console.log(err);

			}
		});
	};

	this.updateBook = function(bookID, availability, borrowerName, callback){
		var Books = Parse.Object.extend("books");
		var books = new Books();
		books.id = bookID;
		books.set("available", availability);
		books.set("borrowedBy", borrowerName);
		books.save(null, {
			success: function(books){
				console.log("HEI");
				console.log(books);
				callback(books);
			},
			error: function(){
				console.log("error");
			}
		});
	};

	this.getBookData = function(query, callback){
		//Get json from http books...
		if( query && query.length > 0){
			// +query
			$http.get('https://www.googleapis.com/books/v1/volumes?q='+query).
			  then(function(response) {
			  	callback(response.data.items);
			  }, function() {
			  	return ["No books found..."];
			  });
				}else{
				return [];
			}
	};

	this.getBookIsbn = function(query, callback){
		//Get json from http books...
		if( query && query.length > 0){
			$http.get('https://www.googleapis.com/books/v1/volumes?q='+query).
			  then(function(response) {
			  	callback(response.data.items);
			  }, function() {
			  	return ["No books found..."];
			  });
				}else{
				return [];
			}
	};

}]);