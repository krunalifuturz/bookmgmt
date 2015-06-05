angular.module('starter', ['ionic', 'ngResource', 'starter.services', 'starter.controllers']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }).state('tab.book-index', {
    url: '/books',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookindex.html',
        controller: 'BookIndexCtrl'
      }
    }
  }).state('tab.book-detail', {
    url: '/book/:bookId',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookdetail.html',
        controller: 'BookDetailCtrl'
      }
    }
  }).state('tab.newbook', {
    url: '/newbook',
    views: {
      'newbook-tab': {
        templateUrl: 'templates/newbook.html',
        controller: 'BookInsertCtrl'
      }
    }
  }).state('tab.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html'
      }
    }
  });
  return $urlRouterProvider.otherwise('/tab/books');
});

angular.module('starter.controllers', []).controller('BookIndexCtrl', function($scope, BookService) {
  return $scope.books = BookService.all();
}).controller('BookDetailCtrl', function($scope, $stateParams, BookService) {
  return $scope.book = BookService.get($stateParams.bookId);
}).controller('BookInsertCtrl', function($scope, BookService) {
  $scope.bookData = {};
  return $scope.addBook = function() {
    alert($scope.bookData.bookname);
    return bookservice.Save($scope.bookData);
  };
});

angular.module('starter.services', []).factory('BookService', function($resource) {
  var bookinfo, books;
  books = [
    {
      id: 0,
      bookname: 'How to teach people',
      authorname: 'Jennifer Schedule',
      publication: 'PHL'
    }, {
      id: 1,
      bookname: 'English Speaking',
      authorname: 'Marry Goerge',
      publication: 'LLC'
    }, {
      id: 2,
      bookname: 'Daily Exercise',
      authorname: 'John matt',
      publication: 'KLK'
    }, {
      id: 3,
      bookname: 'Playing my own way',
      authorname: 'Sachin',
      publication: 'CRC'
    }
  ];
  bookinfo = $resource('http://192.168.1.176/ionic/api/values/SelectAll');
  bookinfo.get(function(data) {
    var bookarray, i;
    bookarray = data.records;
    i = 0;
    return angular.forEach(bookarray, (function(value, key) {
      var book;
      book = [];
      book.id = key;
      book.bookname = value.bookname;
      book.authorname = value.authorname;
      book.publication = value.publication;
      return this.push(book);
    }), books);
  });
  return {
    all: function() {
      return books;
    },
    get: function(bookId) {
      return books[bookId];
    },
    post: function(objbook) {
      var book;
      book = [];
      return books;
    }
  };
});
