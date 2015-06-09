
###
A simple example service that returns some data.
Need to required call api for fetching the book data. For temp basis I have create static data.
###

# app.factory('BookResource',function($resource) {
# return $resource('http://echo.jsontest.com/ktest/myapp');
# })
angular.module("starter.services", [ "ngResource" ]).factory "BookService", ($resource) ->
  
  # Might use a resource here that returns a JSON array
  books = []
  
  #var bookinfo = $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies');
  #var bookinfo = $resource('http://180.211.97.84/ionincApp/api/Values/SelectAll');
  bookinfo = $resource("http://www.w3schools.com/angular/customers.php")
  bookinfo.get (data) ->
    alert data
    
    #var bookarray = data.Books;
    bookarray = data.records
    
    #var bookarray = data;
    i = 0
    angular.forEach bookarray, ((value, key) ->
      book = []
      book.id = key
      
      #book.bookname = value.title; 
      # book.authorname = value.genre;
      # book.publication = value.director;
      # book.bookname = value.bookname; 
      # book.authorname = value.authorname;
      # book.publication = value.publication;
      book.bookname = value.Name
      book.authorname = value.City
      book.publication = value.Country
      @push book
    ), books

  
  # dummy data
  all: ->
    books

  get: (bookId) ->
    
    # Simple index lookup
    books[bookId]

  deletebook: (bookId) ->
    
    # Simple index lookup
    books[bookId]

  save: (objbook) ->
    alert "testing service"
    book = []
    
    # get the book data and call post api for save book detail;
    books
