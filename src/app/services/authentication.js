angular.module( 'ngBoilerplate.services', [
])

.factory('AuthenticationService', [ '$rootScope', '$http', function($rootScope, $http){

  var factory = {};

  factory.login = function(){
    var req = {
       method: 'POST',
       url: LOGIN_URL,
       headers: {
         'Content-Type': 'application/j-son',
         'CLIENT_ID': '6oj6rASYKQ2YlaxXLPAvErfiqzntRVao'
       },
       data: { 
         platformType : 3,
         platformVersion : "1.0"
       }
    };

    new Fingerprint2().get(function(result, components) {
      req.data.deviceToken = result;
      $http(req)
        .then(function(resp){
          $(".body-content").fadeIn();
          $(".giphy").hide();
          $rootScope.token = resp.data.responseData;
        }, function(){
          $(".body-content").hide();
          $(".giphy").show();
        });
    });

  };

  return factory;
}])
;