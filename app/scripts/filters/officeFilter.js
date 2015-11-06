'use strict';
bookLightApp.filter('OfficeFilter', function(){
	return function(books, officeCode){
		if(typeof books !== 'undefined'){
			
			if(officeCode.office === 'All'){
				return books;
			}
			else{
				var officeBooks = [];
				for(var i=0; i< books.length; i++){
					if(books[i].attributes.office === officeCode.office){
						officeBooks.push(books[i]);
					}
				}
				return officeBooks;
			}
		}
	};
});