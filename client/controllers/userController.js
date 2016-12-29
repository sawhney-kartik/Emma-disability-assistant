myApp.controller("userController", function(userFactory, $scope, $location){

	$scope.createUser = function(name) {
		console.log("this is the name in the createUser function in my userController",name);
		userFactory.createuser(name);
	}

	$scope.logout = function() {
		userFactory.logout();
	}


})