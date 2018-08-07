angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.services',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.when( '', '/home' );
}])

.config( [ '$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'app', {
    url: '',
    template: '<div ui-view="main"></div>',
    data: {
      pageTitle: 'Home' 
    },
    resolve: {
      login: function(AuthenticationService){
        return AuthenticationService.login();
      }
    }
  });
  
}])

.run( function run () {
})

.controller( 'AppCtrl', [ '$scope', '$location', 'AuthenticationService', function AppCtrl ( $scope, $location, AuthenticationService ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });

}]);

