var mongoose = require("mongoose")
var Answer = mongoose.model("Answer")
var Question = mongoose.model("Question")

module.exports = (function(){
	return {
		submitAnswer: function(req, res) {
			var newAnswer = new Answer()
			newAnswer._user = req.body.user_id
			newAnswer._question = req.body.q_id
			newAnswer.answer = req.body.answer
			if(req.body.supporting) {
				newAnswer.supporting = req.body.supporting
			} else {
				newAnswer.supporting = " "
			}
			newAnswer.save(function(err, newA) {
				if(err) {
					console.log(err)
				} else {
					Question.findByIdAndUpdate({_id: req.body.q_id}, {$push: {answers: newA}}, function(err, success) {
						if(err) {
							console.log(err)
						} else {
							res.json({msg: "successfully added answer and pushed it to question array"})
						}
					})
				}
			})
		},
		like: function(req, res) {
			// console.log(req.body)
			Answer.findByIdAndUpdate({_id: req.body.id}, {$inc: {like: 1}}, function(err, success) {
				if(err){
					console.log(err)
				} else {
					res.json({msg: "added successfully"})
				}
			})
		}
	}
})()