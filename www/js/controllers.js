angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('BookIndexCtrl', function($scope, BookService) {
  // "Books" is a service returning mock data (services.js)
  $scope.books = BookService.all();
})


// A simple controller that shows a tapped item's data
.controller('BookDetailCtrl', function($scope, $stateParams, BookService) {
  // "Books" is a service returning mock data (services.js)
  $scope.book = BookService.get($stateParams.bookId);
});

// A post controller for save new book data.
// .controller('BookInsertCtrl', function($scope, $stateParams, BookService) {
  // // Get all posts
  // $scope.books = BookService.Post($stateParams);
// });