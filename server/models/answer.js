var mongoose = require("mongoose")
var Schema = mongoose.Schema
var answerSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	answer: String,
	supporting: String,
	_question: {type: Schema.Types.ObjectId, ref: "Answer"},
	like: {type: Number, default: 0}
})
mongoose.model("Answer", answerSchema)