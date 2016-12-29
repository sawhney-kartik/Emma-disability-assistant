myApp.factory("questionFactory", function($location, $sessionStorage, $http){
  var factory = {};
  
  factory.submitQuestion = function(info, callback) {
    $http.post("/submitquestion", info).success(function(msg){
      console.log(msg);
      callback(msg);
    })
  }

  //function to get all questions when the user gets to the dashboard
  factory.getQuestions = function(callback) {
    $http.get("/get_questions").success(function(data){
      callback(data);
    })
  }

  // getting the one question you want when you click answer - need only question details back
  factory.getOneQuestionForAnswerPage = function(id, callback) {
    $http.post("/get_one_question_for_new_answer", id).success(function(data){
      callback(data);
    })
  }

  factory.findonequestion = function(id, callback) {
    $http.post("/findonequestion", id).success(function(data){
      callback(data);
    })
  }

  
  return factory;
})