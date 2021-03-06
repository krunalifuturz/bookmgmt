angular.module("starter.services", [ "ngResource" ])
.factory("BookService", ($resource) ->
  $resource "http://180.211.97.84/ionincApp/api/bookmgmt/:id",
    id: "@id"
  ,
    update:
      method: "PUT"

    remove:
      method: "DELETE"

).service "confirmPopup", ($window) ->
  @showPopup = (message) ->
    $window.confirm message
