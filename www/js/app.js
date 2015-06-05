angular.module('starter', ['ionic', 'ngResource', 'starter.services', 'starter.controllers']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }).state('tab.book-index', {
    url: '/books',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookindex.html',
        controller: 'BookIndexCtrl'
      }
    }
  }).state('tab.book-detail', {
    url: '/book/:bookId',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookdetail.html',
        controller: 'BookDetailCtrl'
      }
    }
  }).state('tab.newbook', {
    url: '/newbook',
    views: {
      'newbook-tab': {
        templateUrl: 'templates/newbook.html',
        controller: 'BookInsertCtrl'
      }
    }
  }).state('tab.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html'
      }
    }
  });
  return $urlRouterProvider.otherwise('/tab/books');
});


