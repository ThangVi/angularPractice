angular.module( 'ngBoilerplate.services')

.factory('HorseService', ['$rootScope', '$http', function($rootScope, $http){

  var factory = {};
  factory.horse = function(){
    $http({
       method: 'GET',
       url: HORSE_URL,
       headers: {
         'Content-Type': 'application/j-son',
         'X-Auth-Token': $rootScope.token
       }}).then(function(data){
        var html = '';
        var j = 1;
        for(var i = 0; i < data.responseData.elements.length; i++){
          if(data.responseData.elements[i].avatar === null || data.responseData.elements[i].avatar === 'https://prism.horse/api/public/image/56423b7e4be340aea9d84a101d31e5cc.jpg'){
            data.responseData.elements[i].avatar = 'https://prismhorse.s3.amazonaws.com/media/a6781a21dd374dc08de34b641e7cc7cd.png';
          }html += '<div class="horse-image" data-toggle="modal" data-target="#myModal'+i+'"><a href="#myModal'+i+'"><img src="'+data.responseData.elements[i].avatar+'"/></a><h3>'+data.responseData.elements[i].name+'</h3><p>'+data.responseData.elements[i].id+'</p></div>';
          if ((i+1)%4 === 0){
            $('#horse-inner').append('<div class="carousel-item' + (j===1 ? ' active' : '') + '" id="horse-item'+j+'"></div>');
            $('#horse-item'+j).html(html);
            html = '';
            j++;
          }
        }
      },function(){
        return 'get data error';
    });
  };
  return factory;
}])
;