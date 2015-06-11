angular.module('starter.controllers', [])
# A simple controller that fetches a list of data from a service
.controller("BookIndexCtrl", ($scope, confirmPopup, BookService) ->
  $scope.books = BookService.query();
  $scope.deleteBook = (book) ->
   alert 'In delete';
   book.$delete ->
     alert "successfully delete";

).controller('BookDetailCtrl', ($scope, $stateParams, BookService) ->
  # "Books" is a service returning mock data (services.js)
  $scope.book = BookService.query({id:$stateParams.id})
  #return
# A post controller for save new book data.
).controller 'BookInsertCtrl', ($scope,$state,$stateParams,$window, BookService) ->
  $scope.bookData = new BookService()
  $scope.addBook = ->
   $scope.bookData.$save ->
    $window.location.href = ""

 # return