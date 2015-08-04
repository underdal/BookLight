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
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });

//apiary-mock:
var baseApiUrl  = 'http://private-135c7-booklight.apiary-mock.com/';

bookLightApp.value('booksResource',baseApiUrl+'books/');
bookLightApp.value('addNewBookUrl', baseApiUrl + 'books/update/')
