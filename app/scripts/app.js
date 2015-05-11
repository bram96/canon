'use strict';
$('#main-menu').metisMenu();
/**
 * @ngdoc overview
 * @name canonApp
 * @description
 * # canonApp
 *
 * Main module of the application.
 */
angular
  .module('canonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'xeditable',
    'hljs'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard')
    $stateProvider
      .state('app', {
        template: '<div ui-view></div>'
      })
      .state('app.dashboard', {
        url: "/dashboard",
        templateUrl: '../views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('app.invoices', {
        url: "/invoices",
        templateUrl: '../views/invoices.html',
        controller: 'InvoicesCtrl'
      })
      .state('app.invoice', {
        url: "/invoice/:id",
        templateUrl: '../views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .state('app.newinvoice', {
        url: "/invoices/new",
        templateUrl: '../views/newinvoice.html',
        controller: 'NewinvoiceCtrl'
      })
      .state('app.persons', {
        url: "/persons",
        templateUrl: '../views/persons.html',
        controller: 'PersonsCtrl'
      })
      .state('app.products', {
        url: "/products",
        templateUrl: '../views/products.html',
        controller: 'ProductsCtrl'
      })
      .state('app.ngrepeat', {
        url: "/ngrepeat",
        templateUrl: '../views/ngrepeat.html',
        controller: 'NgRepeatCtrl'
      })
      .state('app.ngshow', {
        url: "/ngshow",
        templateUrl: '../views/ngshow.html',
        controller: 'NgShowCtrl'
      })
      .state('app.nghide', {
        url: "/nghide",
        templateUrl: '../views/nghide.html',
        controller: 'NgHideCtrl'
      })
      .state('app.ngmodel', {
        url: "/ngmodel",
        templateUrl: '../views/ngmodel.html',
        controller: 'NgModelCtrl'
      })
      .state('app.autonumber', {
        url: "/autonumber",
        templateUrl: '../views/autonumber.html',
        controller: 'AutonumberCtrl'
      })
      .state('app.model', {
        url: "/model",
        templateUrl: '../views/model.html',
        controller: 'ModelCtrl'
      })
  },
  function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      tabReplace: '    '
    })
  }
);
