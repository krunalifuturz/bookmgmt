angular.module('starter.services', [])

app.factory "BookService", ($resource) ->
  
  # Might use a resource here that returns a JSON array
  books = []
  bookinfo = $resource("http://180.211.97.84/ionincApp/api/Values/SelectAll")
  bookinfo.get (data) ->
    bookarray = data.Books
    i = 0
    angular.forEach bookarray, ((value, key) ->
      book = []
      book.id = key
      book.bookname = value.bookname
      book.authorname = value.authorname
      book.publication = value.publication
      @push book
    ), books

  
  # dummy data
  all: ->
    books

  get: (bookId) ->
    
    # Simple index lookup
    books[bookId]

  post: (objbook) ->
    book = []
    
    # get the book data and call post api for save book detail;
    books
