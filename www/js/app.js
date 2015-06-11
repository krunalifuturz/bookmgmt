angular.module('starter', ['ionic', 'ngResource', 'starter.services', 'starter.controllers']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }).state('tab.bookindex', {
    url: '/books',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookindex.html',
        controller: 'BookIndexCtrl'
      }
    }
  }).state('tab.bookdetail', {
    url: '/book/:id',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookdetail.html',
        controller: 'BookDetailCtrl'
      }
    }
  }).state('tab.editbook', {
    url: '/edit/:id',
    views: {
      'books-tab': {
        templateUrl: 'templates/bookedit.html',
        controller: 'BookEditCtrl'
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

angular.module('starter.controllers', []).controller("BookIndexCtrl", function($scope, confirmPopup, BookService) {
  $scope.books = BookService.query();
  return $scope.deleteBook = function(book) {
    alert('In delete');
    return book.$delete(function() {
      return alert("successfully delete");
    });
  };
}).controller('BookDetailCtrl', function($scope, $stateParams, BookService) {
  return $scope.book = BookService.get({
    id: $stateParams.id
  });
}).controller('BookInsertCtrl', function($scope, $state, $stateParams, $window, BookService) {
  $scope.bookData = new BookService();
  return $scope.addBook = function() {
    return $scope.bookData.$save(function() {
      return $window.location.href = "";
    });
  };
});

angular.module("starter.services", ["ngResource"]).factory("BookService", function($resource) {
  return $resource("http://192.168.1.176/ionic/api/bookmgmt/:id", {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    }
  });
}).service("confirmPopup", function($window) {
  return this.showPopup = function(message) {
    return $window.confirm(message);
  };
});
