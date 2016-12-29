var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies', 'ngStorage']);
// We instantiate our application and we inject ngrouter and ngcookies so that they're available
// and so that we can use it to set up our routes below. 



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
myApp.config(function($routeProvider){

		$routeProvider
			.when('/', 
			{
				controller: 'userController',
				templateUrl: "partials/user.html"
			})
			.when('/dashboard', 
			{
				controller: 'dashboardController',
				templateUrl: "partials/dashboard.html"
			})
			.when('/new_question', 
			{
				controller: 'questionsController',
				templateUrl: "partials/newquestion.html"
			})
			.when('/question/:id', 
			{
				controller: 'questionsController',
				templateUrl: "partials/viewquestion.html"
			})
			.when('/question/:id/newanswer', 
			{
				controller: 'answersController',
				templateUrl: "partials/addanswer.html"
			})
 		.otherwise({
    		redirectTo: '/'
  		})
})
}());
