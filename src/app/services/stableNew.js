angular.module( 'ngBoilerplate.services')

.factory('NewsService', ['$rootScope', '$http', function($rootScope, $http){

  var factory = {};
  factory.news = function(){
    return $http({
       method: 'GET',
       url: NEWS_URL + '?pageIndex=0&pageSize=70',
       headers: {
         'Content-Type': 'application/j-son',
         'X-Auth-Token': $rootScope.token
       }
     });
  };
  return factory;
}])
;