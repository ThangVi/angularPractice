angular.module( 'ngBoilerplate.services')

.factory('HorseService', ['$rootScope', '$http', function($rootScope, $http){

  var factory = {};
  factory.horse = function(){
    return $http({
       method: 'GET',
       url: HORSE_URL,
       headers: {
         'Content-Type': 'application/j-son',
         'X-Auth-Token': $rootScope.token
       }
     });
  };
  return factory;
}])
;