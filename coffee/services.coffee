angular.module('starter.services', [])

.factory 'BookService', ($resource) ->
  # Might use a resource here that returns a JSON array
 
   #$http.get('http://echo.jsontest.com/ktest/myapp').then ((resp) ->
		#$scope.conditions = resp.data.conditions;
		#alert(resp.data.ktest);
		#console.error 'ktest:', resp.data.ktest
	
	#), (err) ->
			#alert err
			#console.error 'ERR', err
				# err.status will contain the status code
	
 
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

  