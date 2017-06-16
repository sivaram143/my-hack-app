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
  when('/chatbot', {
    templateUrl: 'partials/chatBot.html'
  }).
  otherwise({
    redirectTo: '/home',
  });
});

myApp.controller("headerController", function($scope,  $location) {
    $scope.menus = {};
    $scope.menus.activeMenu = 'home';
    $scope.menuItems = [
        {title: 'Home', url:'/home'}, 
        {title: 'Conference Room', url:'/cr'},
        {title: 'Webex', url:'/webex'},
        {title: 'Bridge', url:'/bridge'},
        {title: 'Learning Portal', url:'/lp'},
        {title: 'Software Request', url:'/lms'}
    ];

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});


myApp.controller('myCtrl', function($scope, $window, $location) {
  console.log("controller called");
  $scope.redirect = function() {
    $location.path('chatbot');
  };

  $scope.close = function() {
    $location.path('home');
  };


});

myApp.factory("DataModel", function() {
  var Service = {};
  
  
  
  return Service;
});

myApp.controller("ChatController", function($scope) {
  $scope.chatMessages = [];
  
  $scope.formatChat = function(username,text,origDt) {
    var chat = {};
    chat.username = username;
    chat.text = text;
    chat.origDt = origDt;
    return chat;
  }
  
  $scope.addChat = function() {
    if ($scope.newChatMsg != "") {
      var chat = $scope.formatChat("VZ",
                           $scope.newChatMsg,
                           new Date());
       
      $scope.chatMessages.push(chat);
      $scope.newChatMsg = "";
    }
    else {
      
    }
  }
  
});

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});