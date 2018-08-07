angular.module( 'ngBoilerplate.services', [
])

.factory('AuthenticationService', [ '$rootScope', '$http', '$q', function($rootScope, $http, $q){

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

    var defer = $q.defer();
    new Fingerprint2().get(function(result, components) {
      req.data.deviceToken = result;
      return $http(req)
        .then(function(resp){
          defer.resolve();
          $rootScope.token = resp.data.responseData.token;
          $rootScope.loggedIn = true;
        }, function(){
          defer.reject();
        });
    });
    return defer.promise;
  };

  return factory;
}])
;