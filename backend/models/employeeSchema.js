// package imports 
const uniquid = require("uniquid");
const mongoose = require("mongoose");

// Defining Schema
const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    default: uniquid() + Date.now(), // yaha pe default mat karna instead while creating a new User waha do it uniquid!!
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Please enter First Name"],
    validate: {
      validator: function (firstName) {
        return this.firstName.trim().length;
      },
      message: "Employee's first name should not be empty",
    },
  },
  lastName: {
    type: String,
    required: [true, "Please enter last Name"],
    validate: {
      validator: function (lastName) {
        return this.lastName.trim().length;
      },
      message: "Employee's last name should not be empty",
    },
  },
  emailId: {
    type: String,
    required: [true, "Please enter Email"],
    validate: {
      validator: function (emailId) {
        return this.emailId.trim().length;
      },
      message: "Employee's email id should not be empty",
    },
  },
  companyName: {
    type: String,
    required: [true, "Please enter Company Name"],
    validate: {
      validator: function (companyName) {
        return this.companyName.trim().length;
      },
      message: "Employee's company name should not be empty",
    },
  },
  employeeImage: {
    type: String,
    required: [true, "Please enter image"],
    // validate: {
    //   validator: function (employeeImage) {
    //     return this.employeeImage.trim().length;
    //   },
    //   message: "Employee's company name should not be empty",
    // },
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
