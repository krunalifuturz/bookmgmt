angular.module('starter.controllers', [])
# A simple controller that fetches a list of data from a service
.controller("BookIndexCtrl", ($scope, confirmPopup, $window, BookService) ->
  $scope.books = BookService.query()
  
  $scope.deleteBook = (book) ->
    if confirmPopup.showPopup("Are you sure you want to delete this book?")
      book.$delete ->
        $window.location.href = ""

  
).controller('BookDetailCtrl', ($scope, $stateParams, BookService) ->
  # "Books" is a service returning mock data (services.js)
  $scope.book = BookService.get({id:$stateParams.id})
  #return
# A post controller for save new book data.
).controller 'BookInsertCtrl', ($scope,$state,$stateParams,$window, BookService) ->
  $scope.bookData = new BookService()
  $scope.addBook = ->
  $scope.bookData.$save ->
    $window.location.href = ""

 # return