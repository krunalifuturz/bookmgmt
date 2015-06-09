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

angular.module('starter.controllers', []).controller("BookIndexCtrl", function($scope, confirmPopup, $window, BookService) {
  $scope.deleteBook = function(book) {
    if (confirmPopup.showPopup("Are you sure you want to delete this book?")) {
      return book.$delete(function() {
        return $window.location.href = "";
      });
    }
  };
  return $scope.books = BookService.all();
}).controller('BookDetailCtrl', function($scope, $stateParams, BookService) {
  return $scope.book = BookService.get($stateParams.bookId);
}).controller('BookInsertCtrl', function($scope, BookService) {
  $scope.bookData = {};
  return $scope.addBook = function() {
    alert($scope.bookData.bookname);
    bookservice.Save($scope.bookData);
  };
});

angular.module("starter.services", ["ngResource"]).factory("BookService", function($resource) {
  var bookinfo, books;
  books = [];
  bookinfo = $resource("http://180.211.97.84/ionincApp/api/Values/SelectAll");
  bookinfo.get(function(data) {
    var bookarray, i;
    alert(data);
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
    deletebook: function(bookId) {
      return books[bookId];
    },
    save: function(objbook) {
      var book;
      alert("testing service");
      book = [];
      return books;
    }
  };
}).service("confirmPopup", function($window) {
  return this.showPopup = function(message) {
    return $window.confirm(message);
  };
});
