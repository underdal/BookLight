'use strict';

/**
 * @ngdoc overview
 * @name bookLightApp
 * @description
 * # bookLightApp
 *
 * Main module of the application.
 */
var bookLightApp = angular.module('bookLightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'parse-angular',
    'pascalprecht.translate'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        templateUrl: 'views/books.html',
        controller: 'BookShelfCtrl'
      })
      .when('/newbook', {
        templateUrl: 'views/newbook.html',
        controller: 'NewbookCtrl'
      })
      .when('/mybooks', {
        templateUrl: 'views/mybooks.html',
        controller: 'BookShelfCtrl'
      })
      .when('/book/:bookISBN', {
        templateUrl: 'views/book.html',
        controller: 'BookShelfCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  
  Parse.initialize("OAcPvUQ8rtuke551dz7ruo6bFRb0e8QCPIuTck60", "dDccYxiSV26jS55sHzM4wOaWpaFb5k5FuzahfoR9");

//apiary-mock:
var baseApiUrl  = 'http://private-135c7-booklight.apiary-mock.com/';
//"http://localhost:3001/" 
//'http://private-135c7-booklight.apiary-mock.com/';

bookLightApp.value('booksResource',baseApiUrl+'books/');

