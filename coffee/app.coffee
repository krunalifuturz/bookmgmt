# Ionic Starter App

# angular.module is a global place for creating, registering and retrieving Angular modules
# 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
# the 2nd parameter is an array of 'requires'
# 'starter.services' is found in services.js
# 'starter.controllers' is found in controllers.js

angular.module('starter', [
  'ionic'
  'ngResource'
  'starter.services'
  'starter.controllers'
])



.config ($stateProvider, $urlRouterProvider) ->
  # Ionic uses AngularUI Router which uses the concept of states
  # Learn more here: https://github.com/angular-ui/ui-router
  # Set up the various states which the app can be in.
  # Each state's controller can be found in controllers.js
  $stateProvider.state('tab',
    url: '/tab'
    abstract: true
    templateUrl: 'templates/tabs.html').state('tab.bookindex',
    url: '/books'
    views: 'books-tab':
      templateUrl: 'templates/bookindex.html'
      controller: 'BookIndexCtrl').state('tab.bookdetail',
    url: '/book/:id'
    views: 'books-tab':
      templateUrl: 'templates/bookdetail.html'
      controller: 'BookDetailCtrl').state('tab.editbook',
    url: '/edit/:id'
    views: 'books-tab':
      templateUrl: 'templates/bookedit.html'
      controller: 'BookEditCtrl').state('tab.newbook',
    url: '/newbook'
    views: 'newbook-tab':
      templateUrl: 'templates/newbook.html'
      controller: 'BookInsertCtrl').state 'tab.about',
    url: '/about'
    views: 'about-tab': templateUrl: 'templates/about.html'
  # if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise '/tab/books'