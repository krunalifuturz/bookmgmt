angular.module("starter.services", [ "ngResource" ]).factory "BookService", ($resource) ->
  books = []
  bookinfo = $resource("http://180.211.97.84/ionincApp/api/Values/SelectAll")
  bookinfo.get (data) ->
    alert data
    bookarray = data.records
    i = 0
    angular.forEach bookarray, ((value, key) ->
      book = []
      book.id = key
      book.bookname = value.bookname
      book.authorname = value.authorname
      book.publication = value.publication
      @push book
    ), books

  all: ->
    books

  get: (bookId) ->
    books[bookId]

  deletebook: (bookId) ->
    books[bookId]

  save: (objbook) ->
    alert "testing service"
    book = []
    books
.service "confirmPopup", ($window) ->
  #alert("in service");
  @showPopup = (message) ->
    $window.confirm message