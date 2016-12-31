myApp.controller("questionsController", function($scope, $cookies, $location, $routeParams, $sessionStorage, userFactory, questionFactory, answerFactory){

  $scope.addQuestion = function(question_info) {
    console.log("This is my question data in my questionsController", question_info);
    console.log("This is my user_id in my questions controller", $cookies._id);
    question_info.userid = $cookies._id;
    question_info.email = $cookies._email;

    questionFactory.submitQuestion(question_info, function(){
    $location.url("/dashboard");
    })
  }

  $scope.logout = function() {
    userFactory.logout();
  }
  
  $scope.question_id = $routeParams;

  questionFactory.findonequestion($routeParams, function(info){
    $scope.onequestion = info;
    console.log("This is my one question in questions controller findonequestion method", info);
  })

  $scope.like = function(ans_id) {
    console.log("Someone pressed like");
    console.log("This is my answer id", ans_id);
    answerFactory.like(ans_id, function() {
    questionFactory.findonequestion($routeParams, function(info){
        $scope.onequestion = info;
      })

    })
  }
})