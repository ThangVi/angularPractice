/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config( [ '$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'app.home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
  
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['$scope', 'HorseService', 'NewsService', function HomeController( $scope, HorseService, NewsService ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }

// important 8/8/2018-----------------------------------------------------------------

    NewsService.news()
      .then(function(resp){
        $scope.stablenew = [];
        var range = [];
        var j = 0;
        $scope.news = resp.data.responseData.stableNews;
        var count = $scope.news.length/10;
        for (var i = 0; i < $scope.news.length; i++) {
          range.push($scope.news[i]);
          if ((i+1)%10 === 0) {
            $scope.stablenew[j] = range;
            j++;
            range = [];
          }
        }
      });
    HorseService.horse()
      .then(function(resp){
        $scope.horse = [];
        var range = [];
        var j = 0;
        $scope.datahorse = resp.data.responseData.elements;
        console.log($scope.datahorse.length);
        var count = $scope.elements.length/10;
        for (var i = 0; i < $scope.elements.length; i++) {
          range.push($scope.elements[i]);
          if ((i+1)%10 === 0) {
            $scope.horse[j] = range;
            console.log($scope.horse[j]);
            j++;
            range = [];
          }
        }
      });
  });
}])

.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
})
;

