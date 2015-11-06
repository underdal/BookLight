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
/*.config(function ($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'LoginCtrl'
      })
      .state('/', {
        templateUrl: 'views/books.html',
        controller: 'BookShelfCtrl',
        resolve:{}
      })
      .state('/newbook', {
        templateUrl: 'views/newbook.html',
        controller: 'NewbookCtrl'
      })
      .state('/mybooks', {
        templateUrl: 'views/mybooks.html',
        controller: 'BookShelfCtrl'
      })
      .state('/book/:bookISBN', {
        templateUrl: 'views/book.html',
        controller: 'BookShelfCtrl'
      })
      $urlRouteProvider.otherwise({
        redirectTo: '/'
      });
  });*/

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
        controller: 'BookInfoCtrl'
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

