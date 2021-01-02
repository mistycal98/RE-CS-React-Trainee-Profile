// Package imports
const express = require("express");

// Created router Instance
const employeeRoute = express.Router();

// Module Imports
const upload = require("../controllers/empImage");

const {
	getAllEmployee,
	findEmpById,
	createEmployee,
	verifyPostRequest,
	updateEmployee,
	deleteEmpById,
} = require("../controllers/empController");


// Route definitions
// route:"/employee/"
employeeRoute
	.route("/")
	.get(getAllEmployee)
	.post(upload.single("cloudinaryImage"), verifyPostRequest, createEmployee);

// route : "/employee/:empid"
employeeRoute.route("/:empId").delete(deleteEmpById).get(findEmpById).patch(updateEmployee);

module.exports = employeeRoute;
