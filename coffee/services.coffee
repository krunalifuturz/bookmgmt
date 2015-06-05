angular.module('starter.services', [])

.factory "BookService", ($resource) ->
  
  # Might use a resource here that returns a JSON array
  books = []
  #bookinfo = $resource("http://192.168.1.176/ionic/api/values/SelectAllBook")
  bookinfo = $resource("http://www.w3schools.com/angular/customers.php")
  bookinfo.get (data) ->
    bookarray = data.records
    i = 0
    angular.forEach bookarray, ((value, key) ->
      book = []
      book.id = key
      #book.bookname = value.bookname
      #book.authorname = value.authorname
      #book.publication = value.publication
	  book.bookname = value.Name
      book.authorname = value.City
      book.publication = value.Country
      @push book
    ), books

  all: ->
    books

  get: (bookId) ->
    
    # Simple index lookup
    books[bookId]

  post: (objbook) ->
    book = []
    
    # get the book data and call post api for save book detail;
    books

  