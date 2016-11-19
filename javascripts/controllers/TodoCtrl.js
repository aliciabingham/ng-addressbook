"use strict";

app.controller("TodoCtrl", function($scope, ContactFactory){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newContact = {};
  $scope.contact = [];


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

  $scope.addNewContact = function(){
    console.log("newContact in function", $scope.newContact);
    // $scope.contact.push($scope.newContact);
    ContactFactory.postNewContact($scope.newContact).then(function(itemId){
      getContacts();
      $scope.newContact = {};
      $scope.showListView = true;
    });
  };
});