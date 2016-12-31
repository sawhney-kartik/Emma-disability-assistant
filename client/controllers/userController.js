myApp.controller("userController", function(userFactory, $scope, $location){

	$scope.createUser = function(name, email) {
		console.log("this is the name in the createUser function in my userController",name);
		userFactory.createuser(name, email);
	}

	$scope.logout = function() {
		userFactory.logout();
	}


})