'use strict';
bookLightApp.filter('myBorrowedBooksFilter', function(){
	return function(books){
		if(typeof books !== 'undefined'){
			var myBooks = [];
			for(var i=0; i< books.length; i++){
				if(books[i].attributes.borrowedBy === 'Anlaug Underdal'){
					myBooks.push(books[i]);
				}
			}
			return myBooks;
		}
	};
});
