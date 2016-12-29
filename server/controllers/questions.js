var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");

module.exports = (function(){
  return {
    create: function(req, res) {
      // console.log(req.body)
      var newQ = new Question();
      newQ.question = req.body.question;
      newQ.description = req.body.description;
      newQ.keywords = req.body.keywords;

      newQ._user = req.body.user;
      newQ.save(function(err, new_question) {
        if(err) {
          console.log(err)
        } else {
          User.findByIdAndUpdate({_id: req.body.userid}, {$push: {questions: new_question}}, function(err, the_user){
            if(err) {
              console.log(err)
            } else {
              console.log("this is getting created")
              res.json({msg: "created question and pushed to user"})
            }
          })
        }
      })
    },
    get_questions: function(req, res) {
      Question.find({}, function(err, all_questions) {
        if(err) {
          console.log(err)
        } else {
          res.json(all_questions)
        }
      })
    },
    get_one_question_for_new_answer: function(req, res) {
      Question.findOne({_id: req.body.id}, function(err, q_info){
        if(err) {
          console.log(err)
        } else {
          res.json(q_info)
        }
      })
    },
    findonequestion: function(req, res) {
      Question.findOne({_id: req.body.id}).deepPopulate("answers._user").exec(function(err, q_with_a){
        if(err) {
          console.log("in err", err)
        } else {
          console.log("should be all of them")
          res.json(q_with_a)
        }
      })
    }
  }
})()