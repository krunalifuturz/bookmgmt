angular.module('starter.controllers', [])
# A simple controller that fetches a list of data from a service
.controller("BookIndexCtrl", ($scope, confirmPopup, $window, BookService) ->
  $scope.deleteBook = (book) ->
    if confirmPopup.showPopup("Are you sure you want to delete this book?")
      book.$delete ->
        $window.location.href = ""


  $scope.books = BookService.all()
).controller('BookDetailCtrl', ($scope, $stateParams, BookService) ->
  # "Books" is a service returning mock data (services.js)
  $scope.book = BookService.get($stateParams.bookId)
  #return
# A post controller for save new book data.
).controller 'BookInsertCtrl', ($scope, BookService) ->
  $scope.bookData = {}
  #alert 'test'
  $scope.addBook = ->
    alert $scope.bookData.bookname
    bookservice.Save $scope.bookData
    return

 # return