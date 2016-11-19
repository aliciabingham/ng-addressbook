"use strict";

app.controller("TodoCtrl", function($scope, ContactFactory){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newContact = {};
  $scope.contact = [];


let getContacts = function(){
  ContactFactory.getContactList().then(function(fbContacts){
    $scope.contact = fbContacts;
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

  $scope.addNewContact = function(){
    $scope.newContact.isCompleted = false;
    // $scope.newContact.id = $scope.contact.length;
    console.log("newContact in function", $scope.newContact);
    // $scope.contact.push($scope.newContact);
    ContactFactory.postNewItem($scope.newContact).then(function(itemId){
      getContacts();
      $scope.newContact = {};
      $scope.showListView = true;
    });
  };
});