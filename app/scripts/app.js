'use strict';

/**
 * @ngdoc overview
 * @name siteJoinApp
 * @description
 * # siteJoinApp
 *
 * Main module of the application.
 */
angular
  .module('siteJoinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controllerAs: 'equipe'
      })
      .when('/portifolio', {
        templateUrl: 'views/portifolio.html',
        controllerAs: 'portifolio'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/404'
      });

      $locationProvider.hashPrefix('');
  });
