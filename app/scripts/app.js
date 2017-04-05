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
        controller: 'EquipeCtrl',
        controllerAs: 'equipe'
      })
      .when('/portifolio', {
        templateUrl: 'views/portifolio.html',
        controller: 'PortifolioCtrl',
        controllerAs: 'portifolio'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/404'
      });

      $locationProvider.hashPrefix('');
  });
