var mongoose = require("mongoose")
var Schema = mongoose.Schema
var userSchema = new mongoose.Schema({
	name: {
    type: String,
    required: [true, "Name cannot be blank"],
    minlength: [2, "Name must be at least 2 characters long"]
  	},
	questions: [{type: Schema.Types.ObjectId, ref: "Question"}],

})
mongoose.model("User", userSchema)