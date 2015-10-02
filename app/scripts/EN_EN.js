'use strict';

bookLightApp.config(function($translateProvider) {
  $translateProvider.translations('en', {

    add_book: 'Add book',
    author: 'Author',
    availability: 'Availability', 
    borrow: 'Borrow',
    borrowed_by: 'Borrowed by',
    delete_book: 'Delete book',
    description: 'Description',
    isbn: 'ISBN',
    my_books: 'My books', 
    my_borrowed_books: 'My borrowed books',
    office: 'Office',
    oslo: 'Oslo',
    owner: 'Owner', 
    return_book: 'Return',
    save: 'Save',
    saved_book_error: 'An error occured, try again',
    saved_book_success:'Your book has been saved',
    title: 'Title'

  });
  $translateProvider.preferredLanguage('en');
});