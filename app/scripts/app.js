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
    'parse-angular'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .when('/newbook', {
        templateUrl: 'views/newbook.html',
        controller: 'NewbookCtrl',
        controllerAs: 'newbook'
      })
      .when('/mybooks', {
        templateUrl: 'views/mybooks.html',
        controller: 'BookCtrl',
        controllerAs: 'mybooks'
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

