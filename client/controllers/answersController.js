myApp.controller("answersController", function($scope, $routeParams, $cookies, $location, questionFactory, answerFactory, userFactory){
	questionFactory.getOneQuestionForAnswerPage($routeParams, function(data) {
		$scope.onequestion = data;
	})
	$scope.question_id = $routeParams;
	console.log("This is my question_id inside answersController", $routeParams);

	$scope.submitAnswer = function(a_info) {
		console.log(a_info);
		console.log($routeParams);
		console.log($cookies._id);
		a_info.user_id = $cookies._id;
		a_info.q_id = $routeParams.id;
		answerFactory.submitAnswer(a_info, function(){
		$location.path('/question/' + a_info.q_id);
		})
	}

	$scope.logout = function() {
		userFactory.logout()
	}

})

