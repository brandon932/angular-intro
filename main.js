angular.module('testApp',[]);

var mainControllerFunction = function($scope){
  console.log("hello");
  $scope.greeting = "hello, class!";
  var excitement = 0;
  $scope.excite = function(){
    excitement++;
    if (excitement>5){
      $scope.greeting = "The class is excited!";
    }
  };
};
var secondaryControllerFunction = function($scope){
  $scope.paragraph= "Hello World this is a bad paragraph";
  var roadhousMovie = {
    "title": "roadhouse",
    "genre": "comedy-drama",
    "lead actor":"patrick"
  };
  var jurassicMovie = {
    "title": "jurasic park",
    "genre": "drama",
    "lead actor":"yusef"
  };
  var thenotebookMovie = {
    "title": "notebook",
    "genre": "romance",
    "lead actor":"ryan"
  };
  $scope.movies= [thenotebookMovie, roadhousMovie,  jurassicMovie];
  $scope.students = ["johnny", "brandon", "jeff", "ben"];
};
angular.module('testApp')
.controller("mainController", ["$scope",mainControllerFunction])
.controller("secondaryController", ["$scope",secondaryControllerFunction]);
