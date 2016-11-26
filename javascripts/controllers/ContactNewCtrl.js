'use strict';

app.controller("ContactNewCtrl", function($scope, $location, ContactFactory){
  $scope.addNewContact = function(){
    ContactFactory.postNewContact($scope.newContact).then(function(contactId){
      $location.url("/contacts/list");
      $scope.newContact = {};
      $scope.showListView = true;
    });
  };
});