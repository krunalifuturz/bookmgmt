angular.module("starter.services", [ "ngResource" ])
.factory("BookService", ($resource) ->
  #$resource "http://180.211.97.84/ionincApp/api/bookmgmt/:id",
  $resource "http://192.168.1.176/ionic/api/bookmgmt/:id",
    id: "@id"
  ,
    update:
      method: "PUT"

).service "confirmPopup", ($window) ->
  @showPopup = (message) ->
    $window.confirm message
