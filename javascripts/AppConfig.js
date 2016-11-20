"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);

});

app.config(function($routeProvider){
 $routeProvider
    .when('/contacts/list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'ContactListCtrl'
    })
    .when('/contacts/new', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ContactNewCtrl'
    })
    .when('/contacts/view/:id', {
      templateUrl: 'partials/item-view.html',
      controller: 'ItemViewCtrl'
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'partials/contact-new.html',
      controller: 'ItemEditCtrl'
    })
    .otherwise('/contacts/list');
});