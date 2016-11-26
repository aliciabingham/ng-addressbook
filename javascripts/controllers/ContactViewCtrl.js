'use strict';

app.controller("ContactViewCtrl", function($scope, $routeParams, ContactFactory){
  $scope.selectedContact = {};
  var contactId = $routeParams.id;
  console.log("$routeParams", contactId);
  console.log("controller working");

  ContactFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id = contactId;
    $scope.selectedContact = oneContact;
    console.log("oneContact", oneContact);
  });
});
