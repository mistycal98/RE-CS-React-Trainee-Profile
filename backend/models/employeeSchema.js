// package imports
const mongoose = require("mongoose");
// const emailExistHandler = require("../helper/emailExist.js");

// Defining Schema
const employeeSchema = new mongoose.Schema({
	employeeId: {
		type: String,
		unique: true,
		required: true,
	},
	firstName: {
		type: String,
		required: [true, "Please enter First Name"],
		validate: [
			{
				validator: function () {
					return this.firstName.trim().length;
				},
				message: "Firstname should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]*?"|'[^']*?'|[^'">])*>/;
					if (re.test(this.firstName)) {
						return false;
					}
				},
				message: "Firstname cannot be HTML",
			},
		],
	},
	lastName: {
		type: String,
		required: [true, "Please enter last Name"],
		validate: [
			{
				validator: function () {
					return this.lastName.trim().length;
				},
				message: "Last name should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]*?"|'[^']*?'|[^'">])*>/;
					if (re.test(this.lastName)) {
						return false;
					}
				},
				message: "Lastname content cannot be HTML",
			},
		],
	},
	emailId: {
		type: String,
		required: [true, "Please enter Email"],
		unique: true,
		validate: [
			{
				validator: function () {
					return this.emailId.trim().length;
				},
				message: "Employee's email id should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]*?"|'[^']*?'|[^'">])*>/;
					if (re.test(this.emailId)) {
						return false;
					}
				},
				message: "Email id cannot be HTML",
			},
			{
				validator: function () {
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

					if (!re.test(this.emailId)) {
						return false;
					}
				},
				message: "Email id is not valid",
			},
		],
	},
	companyName: {
		type: String,
		required: [true, "Please enter Company Name"],
		validate: [
			{
				validator: function () {
					return this.companyName.trim().length;
				},
				message: "Company name should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]*?"|'[^']*?'|[^'">])*>/;
					if (re.test(this.companyName)) {
						return false;
					}
				},
				message: "Company name cannot be HTML",
			},
		],
	},
	cloudinaryImage: {
		type: String,
		required: [true, "Please add the image"],
	},
	cloudinaryId: {
		type: String,
	},
	profileUrl: {
		type: String,
		required: [true, "Please add the profile url"],
		validate: [
			{
				validator: function () {
					return this.profileUrl.trim().length;
				},
				message: "Profile url should not be empty",
			},
			{
				validator: function () {
					const re = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
					if (re.test(this.profileUrl)) {
						return true;
					}
				},
				message: "Invalid Url",
			},
		],
	},
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
