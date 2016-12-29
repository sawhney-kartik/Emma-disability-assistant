myApp.factory("userFactory", function($location, $sessionStorage, $cookies, $http){
  var factory = {};
  
  $sessionStorage.currentUser = {};

  factory.logout = function() { // logging out of a session
    $sessionStorage.currentUser = {};
    $cookies._id ="";
    $location.url("/")
  }


  factory.createuser = function(info) { // logging user in/obtaining session info initially
    $http.post("/login", {name: info}).success(function(user_info){
      $cookies._id= user_info._id;
      console.log("This is my id stored in cookies!", user_info._id, $cookies._id);
      $location.url("/dashboard");
    })
  }


  factory.user = function() { // factory grabbing the user object from cookies
    return $cookies._id;
  }

  
  return factory;
})