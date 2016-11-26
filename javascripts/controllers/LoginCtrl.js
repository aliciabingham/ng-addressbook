'use strict';

app.controller("LoginCtrl", function($rootScope, $scope, $location, AuthFactory, UserFactory) {
  $scope.loginContainer = true;

  let logMeIn = function(loginStuff){
        AuthFactory.authenticate(loginStuff).then(function(didLogin){
        console.log("didLogin", didLogin);
        return UserFactory.getUser(didLogin.uid);
      }).then(function(userCreds){
        $rootScope.user = userCreds;
        $scope.login = {};
        $scope.register = {};
        $location.url("/contacts/list");
      });
  };

    $scope.loginUser = function(loginNewUser){
    logMeIn(loginNewUser);
  };

});
