angular.module('starter', ['ionic', 'ngAria', 'ngMaterial', 'ngResource', 'starter.services', 'starter.controllers']).config([
  "$mdThemingProvider", function($mdThemingProvider) {
    return $mdThemingProvider.theme('default').primaryPalette('deep-purple').accentPalette('orange');
  }
]).config(function($stateProvider, $urlRouterProvider) {
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

angular.module('starter.controllers', [])
.controller("AppCtrl", function($scope) {
  $scope.data = {
    selectedIndex: 0,
    secondLocked: false,
    secondLabel: "Item Two",
    bottom: true
  };
  $scope.next = function() {
    return $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
  };
  return $scope.previous = function() {
    return $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
  };
}).controller("BookIndexCtrl", function($scope, confirmPopup, BookService) {
  $scope.books = BookService.query();
  return $scope.deleteBook = function(book) {
    alert('In delete');
    return book.$delete(function() {
      return alert("successfully delete");
    });
  };
}).controller("BookEditCtrl", function($scope, $stateParams, BookService) {
  alert("in edit");
  $scope.updateBook = function() {
    return $scope.book.$update(function() {
      return $state.go("tab.book-index");
    });
  };
  $scope.getBook = function() {
    return $scope.book = BookService.get({
      id: $stateParams.id
    });
  };
  return $scope.getBook();
}).controller('BookDetailCtrl', function($scope, $stateParams, BookService) {
  return $scope.book = BookService.query({
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
  return $resource("http://180.211.97.84/ionincApp/api/bookmgmt/:id", {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    },
    remove: {
      method: "DELETE"
    }
  });
}).service("confirmPopup", function($window) {
  return this.showPopup = function(message) {
    return $window.confirm(message);
  };
});
