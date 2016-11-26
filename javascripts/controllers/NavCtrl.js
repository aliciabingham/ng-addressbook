"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navContacts=[
  {
    name:"logout",
    url: "#/Logout"
  },
  {
    name:"all contacts",
    url: "#/contacts/list"
  },
  {
    name:"new contacts",
    url: "#/contacts/new"
  }];
});