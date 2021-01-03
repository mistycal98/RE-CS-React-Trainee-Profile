const mongoose = require("mongoose");

async function emailExistHandler() {
	return await mongoose.model("Employee").exists({ emailId: this.emailId });
}

module.exports = emailExistHandler;
