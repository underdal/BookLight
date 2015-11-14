'use strict';
bookLightApp.filter('myBooksFilter', function($cookies){
	return function(books){
		var user = $cookies.get('user');

		if(typeof books !== 'undefined'){
			var myBooks = [];
			for(var i=0; i< books.length; i++){
				if(books[i].attributes.owner === user){
					myBooks.push(books[i]);
				}
			}
			return myBooks;
		}
	};
});
