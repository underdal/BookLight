'use strict';
bookLightApp.filter('search', function(){
	return function(books){
		if(typeof books !== 'undefined'){
			console.log(books);
		
			var searcBooks = [];
			for(var i=0; i< books.length; i++){
				if(books[i].attributes.author.indexOf(searchText) !== -1){
					searcBooks.push(books[i]);
				}
			}
			return searcBooks;
		}
	};
});
//|| (books.attributes.title.indexOf($scope.query) != -1))