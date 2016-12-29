var mongoose = require("mongoose")
var Schema = mongoose.Schema
var deepPopulate = require('mongoose-deep-populate')(mongoose)

var questionSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	question: {
    type: String,
    required: [true, "Question cannot be blank"],
    minlength: [10, "Question must be at least 10 characters long"]
  	},
	description: String,
	keywords: String,
	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
})
mongoose.model("Question", questionSchema)
questionSchema.plugin(deepPopulate) 