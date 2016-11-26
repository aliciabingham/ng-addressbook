'use strict';

app.controller("ContactListCtrl", function($scope, ContactFactory){
  $scope.welcome = 'hello';
  $scope.contacts = [];

let getContacts = function(){
  ContactFactory.getContactList().then(function(fbContacts){
    $scope.contacts = fbContacts;
  });
};

getContacts();


  $scope.allContacts = function(){
    console.log("you clicked all contacts");
    $scope.showListView = true;
  };

  $scope.newContact = function(){
    console.log("you clicked new contact");
    $scope.showListView = false;
  };

  $scope.deleteContact = function(contactID){
    console.log("you deleted me", contactID);
    ContactFactory.deleteContact(contactID).then(function(response){
      getContacts();
    });
  };


});