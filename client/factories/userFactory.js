myApp.factory("userFactory", function($location, $sessionStorage, $cookies, $http){
  var factory = {};
  
  $sessionStorage.currentUser = {};

  factory.logout = function() { // logging out of a session
    $sessionStorage.currentUser = {};
    $cookies._id ="";
    $cookies._name ="";
    $cookies._email ="";

    $location.url("/")
  }


  factory.createuser = function(name, email) { // logging user in/obtaining session info initially
    $http.post("/login", {name: name, email: email}).success(function(user_info){
      $cookies._id= user_info._id;
      $cookies._name = name;
      $cookies._email = email;

      $location.url("/dashboard");
    })
  }


  factory.user = function() { // factory grabbing the user object from cookies
    return $cookies._id;
  }

  
  return factory;
})