var myApp = angular.module('myApp', ['ngRoute']);

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
  when('/CRchatbot', {
    templateUrl: 'partials/CRchatBot.html'
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
        {title: 'LMS', url:'/lms'},
        {title: 'Software Request', url:'/sr'}
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});


myApp.controller('myCtrl', function($scope, $window, $location) {
  $scope.redirect = function() {
    $location.path('chatbot');
  };

  $scope.redirect_chatBot = function() {
    $location.path('CRchatbot');
  };

  $scope.close = function() {
    $location.path('home');
  };


});


myApp.controller("DummyChatController", function($scope) {
  $scope.chatMessages = [];

  $scope.formatChatDummy = function(username,text,origDt) {
    var chat = {};
    chat.username = username;
    chat.text = text;
    chat.origDt = origDt;
    return chat;
  }

  $scope.addChat = function() {
    if ($scope.newChatMsg != "") {
      var chat = $scope.formatChatDummy("VZ",
                           $scope.newChatMsg,
                           new Date());

      $scope.chatMessages.push(chat);
      $scope.newChatMsg = "";
    }
    else {

    }
  }

});

myApp.controller("ChatController", function($scope,$http) {
  $scope.isDisabled = false;
  $scope.reset = function(){
    location.reload();
    $scope.chatMessages = [];
  }

  $scope.chatMessages = [];

  $scope.formatChat = function(text, origDt) {
    var chat = {};
    chat.text = text;
    chat.origDt = origDt;
    return chat;
  }

  $scope.sendMsg = function() {
     if ($scope.newChatMsg != "") {
        var chat = $scope.formatChat($scope.newChatMsg, new Date());
        $scope.chatMessages.push(chat);
        //$scope.newChatMsg = "";
    }
    $scope.isDisabled = true;
    $http({method: 'GET',
      url: "/fetchMsg",
      params: {msg:$scope.newChatMsg}
    }).
    success(function(data) {
          $scope.newChatMsg = "";
          //console.log("data..."+JSON.stringify(data));
          if(data.length!=0){
            var chat = $scope.formatChat(data.message, new Date());
            $scope.chatMessages.push(chat);
          }
          $scope.isDisabled = false;
    }).error(function(data) {
        console.error("error in posting");
    })
  }

});

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
