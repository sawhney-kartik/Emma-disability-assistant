myApp.factory("answerFactory", function($location, $sessionStorage, $http){
	var factory = {}
	
	factory.submitAnswer = function(obj, callback) {
		$http.post("/submit_answer", obj).success(function(success_info){
			console.log(success_info);
			callback();
		})
	}

	factory.like = function(id, callback) {
		$http.post("/like", {id: id}).success(function(info){
			callback();
		})
	}

	
	return factory
})
