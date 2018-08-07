angular.module( 'ngBoilerplate.services')

.factory('HorseService', ['$rootScope', '$http', function($rootScope, $http){

  var factory = {};
  // var status;
  // factory.horse = function(){
  	// $http.get(HORSE_URL)
  	// 	.success(function(data){status = 'ok'; status.data = data;})
  	// 	.erro(function(message){status = 'erro'; status.message = message;})
  	// 	.then(return status)};
  return factory;
}])
;