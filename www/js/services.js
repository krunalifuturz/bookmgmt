angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 * Need to required call api for fetching the book data. For temp basis I have create static data.
 */
.factory('BookService', function($http) {
  // Might use a resource here that returns a JSON array

  $http.get('http://echo.jsontest.com/conditions/frightful').then(function(resp) {
    //$scope.conditions = resp.data.conditions;
	alert(resp.data.conditions);
  }, function(err) {
	  alert(err);
    console.error('ERR', err);
    // err.status will contain the status code
  });
  
  // dummy data
  var books = [
    { id: 0, bookname: 'How to teach people', authorname: 'Jennifer Schedule', publication: 'PHL' },
    { id: 1, bookname: 'English Speaking', authorname: 'Marry Goerge', publication: 'LLC'},
    { id: 2, bookname: 'Daily Exercise', authorname: 'John matt', publication: 'KLK'},
    { id: 3, bookname: 'Playing my own way', authorname: 'Sachin', publication: 'CRC' }
  ];

  return {
    all: function() {
      return books;
    },
    get: function(bookId) {
      // Simple index lookup
      return books[bookId];
    }
  }
});
