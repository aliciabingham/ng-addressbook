"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navContacts=[
  {
    name:"Logout",
    url: "#/Logout"
  },
  {
    name:"All Contacts",
    url: "#/contacts/list"
  },
  {
    name:"New Contacts",
    url: "#/contacts/new"
  }];
});