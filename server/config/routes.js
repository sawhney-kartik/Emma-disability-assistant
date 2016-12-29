var users = require("./../controllers/users.js")
var questions = require("./../controllers/questions.js")
var answers = require("./../controllers/answers.js")

module.exports = function(app) {

	app.post("/login", function(req, res) {
		users.login_user(req, res)
	})


	app.post("/submitquestion", function(req, res){
		questions.create(req, res)
	})

	app.get("/get_questions", function(req, res) {
		questions.get_questions(req, res)
	})

	app.post("/get_one_question_for_new_answer", function(req, res) {
		questions.get_one_question_for_new_answer(req, res)
	})

	app.post("/submit_answer", function(req, res){
		answers.submitAnswer(req, res)
	})

	app.post("/findonequestion", function(req, res) {
		questions.findonequestion(req, res)
	})

	app.post("/like", function(req, res) {
		answers.like(req, res)
	})

}