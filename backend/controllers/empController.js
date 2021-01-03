// Package Imports
const uniquid = require("uniquid");
const cloudinary = require("cloudinary").v2;
let cloudinaryObj = require("../helper/cloudinaryApi.js");

// Module Imports
const Employee = require("../models/employeeSchema.js");

// Helper Imports
const AppError = require("../helper/appErrorClass");
const sendErrorMessage = require("../helper/sendError");
const sendResponse = require("../helper/sendResponse");

const verifyPostRequest = (req, res, next) => {
  console.log(req.body);
  const requireProperties = [
    "firstName",
    "lastName",
    "companyName",
    "emailId",
    "profileUrl",
  ];
  let result = requireProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    sendErrorMessage(
      new AppError(400, "unsuccessful", "request body is inavlid"),
      req,
      res
    );
  } else {
    next();
  }
};

// GET all Employees from database
const getAllEmployee = async (req, res, next) => {
  try {
    let employee = await Employee.find({});
    sendResponse(200, "Successful", employee, req, res);
  } catch (err) {
    console.log(err);
  }
};

// POST create a new Employee
const createEmployee = async (req, res, next) => {
  let { firstName, lastName, emailId, companyName, profileUrl } = req.body;

  try {
    cloudinary.config(cloudinaryObj);

    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);

    let newEmployee = new Employee({
      employeeId: uniquid() + Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      emailId: emailId.trim(),
      companyName: companyName.trim(),
      cloudinaryImage: cloudinaryResult.secure_url,
      cloudinaryId: cloudinaryResult.public_id,
      profileUrl: profileUrl.trim(),
    });

    let employee = await newEmployee.save();

    sendResponse(201, "Successful", employee, req, res);
  } catch (err) {
    console.error(err);
  }
};

// GET a specific employee by id in request params
const findEmpById = async (req, res, next) => {
	try {
		let employee = await Employee.findOne({ employeeId: req.params.empId });
		sendResponse(201, "Successful", employee, req, res);
	} catch (err) {
		console.log(err);
		sendErrorMessage(new AppError(400, "Unsuccessful", "Id not found"), req, res);
	}
};

// PATCH update employee by id
const updateEmployee = async (req, res, next) => {
	try {
		let employee = await Employee.findOneAndUpdate(
			{ employeeId: req.params.empId },
			{ companyName: req.body.companyName },
			{ new: true, useFindAndModify: false }
		);
		sendResponse(201, "Successful", employee, req, res);
	} catch (err) {
		console.log(err);
		sendErrorMessage(new AppError(400, "Unsuccessful", "Cannot update"), req, res);
	}
};

// DELETE employee by a specfic id
const deleteEmpById = async (req, res, next) => {
	try {
		let employee = await Employee.findOne({ employeeId: req.params.empId });

		cloudinary.config(cloudinaryObj);

		await cloudinary.uploader.destroy(employee.cloudinaryId);

		await Employee.deleteOne({
			employeeId: employee.employeeId,
		});

		sendResponse(201, "Successfull", "Employee deleted", req, res);
	} catch (err) {
		console.log(err);
		sendErrorMessage(
			new AppError(400, "Unsuccessful request", "Employee can not be deleted"),
			req,
			res
		);
	}
};

// Module Named Exports
module.exports.getAllEmployee = getAllEmployee;
module.exports.findEmpById = findEmpById;
module.exports.createEmployee = createEmployee;
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.deleteEmpById = deleteEmpById;
module.exports.updateEmployee = updateEmployee;
