"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){

  var getContactList = function(){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
      .success(function(response){
        let contacts = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          contacts.push(response[key]);
        });
        resolve(contacts);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  };

  var postNewContact = function(newContact){
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
        JSON.stringify({
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          email: newContact.email,
          phone: newContact.phone
        })
        )
      .success(function(postResponse){
        resolve(postResponse);
      })
      .error(function(postError){
        reject(postError);
      });
    });
  };

var deleteContact = function(contactID) {
  return $q((resolve, reject) => {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactID}.json`)
    .success(function(deleteResponse){
      resolve(deleteResponse);
      console.log(deleteResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });
};

var getSingleContact = function(contactID){
  return $q((resolve, reject) => {
    $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactID}.json`)
    .success(function(getSingleResponse){
      resolve(getSingleResponse);
    })
    .error(function(getSingleError){
      reject(getSingleError);
    });
  });
};

var editContact = function(editContact){
  return $q((resolve, reject) => {
    $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`);
    JSON.stringify({
      firstName: editContact.firstName,
      lastName: editContact.lastName
    })
    .success(function(editResponse){
      resolve(editResponse);
    })
    .error(function(editError){
      reject(editError);
    });
  });
};


return {getContactList:getContactList, postNewContact:postNewContact, deleteContact:deleteContact, getSingleContact:getSingleContact, editContact:editContact};
});