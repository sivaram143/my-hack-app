var myApp = angular.module('myApp', ['ngRoute']);


console.log("called");
myApp.config(function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  when('/cr', {
    templateUrl: 'partials/cr.html'
  }).
  when('/webex', {
    templateUrl: 'partials/webex.html'
  }).
  when('/lms', {
    templateUrl: 'partials/lms.html'
  }).
  when('/bridge', {
    templateUrl: 'partials/bridge.html'
  }).
  when('/lp', {
    templateUrl: 'partials/lp.html'
  }).
  when('/sr', {
    templateUrl: 'partials/sr.html'
  }).
  when('/blank', {
    templateUrl: 'partials/blank.html'
  }).
  otherwise({
    redirectTo: '/home',
  });
});

myApp.controller('myCtrl', function($scope, $window, $location) {
  console.log("controller called");
  $scope.redirect = function() {
    $location.path('blank');
  };

  $scope.messages = [];
  $scope.sub = function(message) {
        console.log("message.."+message);
        $scope.messages.push(message);
        console.log($scope.messages);
        $scope.msg = "";
        console.log($scope.message);
        // $http.post('/view1',$scope.formData).
        // success(function(data) {
        //     console.log("posted successfully");
        // }).error(function(data) {
        //     console.error("error in posting");
        // })
    }
});

