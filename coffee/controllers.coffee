angular.module('starter.controllers', [])
# A simple controller that fetches a list of data from a service
.controller 'BookIndexCtrl', ($scope, BookService) ->
  # "Books" is a service returning mock data (services.js)
  $scope.books = BookService.all()
  #return
# A simple controller that shows a tapped item's data
.controller 'BookDetailCtrl', ($scope, $stateParams, BookService) ->
  # "Books" is a service returning mock data (services.js)
  $scope.book = BookService.get($stateParams.bookId)
  #return
# A post controller for save new book data.
.controller 'BookInsertCtrl', ($scope, BookService) ->
  $scope.bookData = {}
  #alert 'test'

  $scope.addBook = ->
    alert $scope.bookData.bookname
    bookservice.Save $scope.bookData
    #return

 # return