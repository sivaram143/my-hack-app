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
  otherwise({
    redirectTo: '/home',
  });
});