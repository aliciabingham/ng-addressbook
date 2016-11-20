'use strict';

app.controller("ContactViewCtrl", function($scope, $routeParams, ContactFactory){
  $scope.selectedItem = {};
  var contactId = $routeParams.id;
  console.log("$routeParams", contactId);
  console.log("controller working");

  ContactFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id = contactId;
    $scope.selectedItem = oneContact;
    console.log("oneContact", oneContact);
  });
});
