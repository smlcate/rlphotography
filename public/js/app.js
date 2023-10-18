var app = angular.module('mainApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // // HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
      url: '/',
      templateUrl: '../partials/home.html'
  })
  .state('gallery', {
      url: '/gallery',
      templateUrl: '../partials/gallery.html'
  })
  .state('request', {
      url: '/request',
      templateUrl: '../partials/request.html'
  })
});
