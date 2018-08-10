angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'ui.bootstrap'
])

.config( function config( $stateProvider ) {
  $stateProvider.state( 'app.login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  }); 
})

.controller( 'LoginCtrl', ['$scope','$window', function checkLogin( $scope, $window) {
  // $scope.result = false;
  // $scope.phoneresq = false;
  // $scope.passresq = false;
  
  $scope.checkInputs = function(result){
    var validate = 0;
    var phone = angular.element($('#name-login')).val();
    var pass = angular.element($('#alterEgo')).val();
    if(phone === '' && !isNumeric(phone)){
      validate++;
      $window.alert('Phone chua dung');
    }
    if(pass.length < 8){
      validate++;
      $window.alert('Password chua dung');
    }
    if (validate > 0) {
      return false;
    }else{
      return true;
    }
  // $('input[type="text"]').each(function(){
  //    if($(this).val() !== '' && isNumeric($(this).val())){ phoneresq = true;}
  //    else
  //      {$window.alert ('phone khong dung ');}
  // });
  // $('input[type="password"]'.each(function(){
  //  if ($(this).val().length >= 8){ passresq = true;}
  //  else
  //    {$window.alert('password phai co 8 ky tu');}
  // }));
  // if (phoneresq === true && passresq === true ) {
  //  result = true;
  // }
  // else{
  //  result = false;
  // }
  // return result;
  };
}])

;