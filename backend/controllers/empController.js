const path = require("path");
const mongoose = require("mongoose");
const Employee = require("../models/employeeSchema.js");
const AppError = require("../helper/appErrorClass");
const sendErrorMessage = require("../helper/sendError");
const sendResponse = require("../helper/sendResponse");
const uniquid = require("uniquid");
const upload = require("../controllers/empImage");

const verifyPostRequest = (req, res, next) => {
  const requireProperties = ["firstName", "lastName", "companyName", "emailId"];
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
const getAllEmployee = (req, res, next) => {
  Employee.find({})
    .then((employee) => {
      sendResponse(200, "Successful", employee, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const createEmployee = (req, res, next) => {
  let newEmployee = new Employee({
    employeeId: uniquid(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    companyName: req.body.companyName,
    employeeImage: req.file.path,
  });
  newEmployee
    .save()
    .then((employee) => {
      // console.log(employee);
      sendResponse(201, "Successful", employee, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const findEmpById = (req, res, next) => {
  Employee.findOne({ employeeId: req.params.empId })
    .then((employee) => {
      sendResponse(201, "Successful", employee, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(400, "Unsuccessful", "Id not found"),
        req,
        res
      );
    });
};

const updateEmployee = (req, res, next) => {
  // console.log(req.params);
  Employee.findOneAndUpdate(
    { employeeId: req.params.empId },
    { companyName: req.body.companyName },
    { new: true, useFindAndModify: false }
  )
    .then((employee) => {
      console.log(employee);
      res.send(employee);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteEmpById = (req, res, next) => {
  Employee.findOneAndDelete({ employeeId: req.params.empId })
    .then((employee) => {
      // console.log(employee);
      sendResponse(201, "Successfully Deleted", employee, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(
          400,
          "Unsuccessful request",
          "Employee can not be deleted"
        ),
        req,
        res
      );
    });
};

module.exports.getAllEmployee = getAllEmployee;
module.exports.findEmpById = findEmpById;
module.exports.createEmployee = createEmployee;
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.deleteEmpById = deleteEmpById;
module.exports.updateEmployee = updateEmployee;
