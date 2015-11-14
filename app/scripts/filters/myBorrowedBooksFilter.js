'use strict';
bookLightApp.filter('myBorrowedBooksFilter', function($cookies){
	return function(books){
		var user = $cookies.get('user');
		if(typeof books !== 'undefined'){
			var myBooks = [];
			for(var i=0; i< books.length; i++){
				if(books[i].attributes.borrowedBy === user){
					myBooks.push(books[i]);
				}
			}
			return myBooks;
		}
	};
});
