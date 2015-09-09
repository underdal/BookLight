bookLightApp.config(function($translateProvider) {
  $translateProvider.translations('en', {

    add_book: 'Add book',
	saved_book_success:'Your book has been saved',
	saved_book_error: 'An error occured, try again',
	title: 'Title',
	author: 'Author',
	office: 'Office',
	save: 'Save',
	owner: 'Owner', 
	availability: 'Availability', 
	description: 'Description',
	borrow: 'Borrow',
	borrowed_by: 'Borrowed by',
	my_books: 'My books', 
	my_borrowed_books: 'My borrowed books',
	return_book: 'return'
  });
   $translateProvider.preferredLanguage('en');
});