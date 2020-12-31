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
			// {
			// 	validator: async function () {
			// 		let emailExist = await emailExistHandler();
			// 		console.log(emailExist);
			// 		return emailExist;
			// 	},
			// 	message: "Email already exists",
			// },
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
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
