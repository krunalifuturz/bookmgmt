angular.module('starter.services', [])

.factory 'BookService', ($resource) ->
  # Might use a resource here that returns a JSON array
  # dummy data
  books = [
    {
      id: 0
      bookname: 'How to teach people'
      authorname: 'Jennifer Schedule'
      publication: 'PHL'
    }
    {
      id: 1
      bookname: 'English Speaking'
      authorname: 'Marry Goerge'
      publication: 'LLC'
    }
    {
      id: 2
      bookname: 'Daily Exercise'
      authorname: 'John matt'
      publication: 'KLK'
    }
    {
      id: 3
      bookname: 'Playing my own way'
      authorname: 'Sachin'
      publication: 'CRC'
    }
  ]
  
  
  bookinfo = $resource('http://192.168.1.176/ionic/api/values/SelectAll')
  bookinfo.get (data) ->
    bookarray = data.records
    i = 0
    angular.forEach bookarray, ((value, key) ->
      book = []
      book.id = key
      book.bookname = value.bookname
      book.authorname = value.authorname
      book.publication = value.publication
      @push book
     # return
    ), books
  
  
  {
    all: ->
      books
    get: (bookId) ->
      # Simple index lookup
      books[bookId]
    post: (objbook) ->
      book = []
      # get the book data and call post api for save book detail;
      books

  }

  