const express = require("express");
const upload = require("../controllers/empImage");
const {
  getAllEmployee,
  findEmpById,
  createEmployee,
  verifyPostRequest,
  updateEmployee,
  deleteEmpById,
} = require("../controllers/empController");
const router = express.Router();
router
  .route("/")
  .get(getAllEmployee)
  .post(upload.single("employeeImage"), verifyPostRequest, createEmployee);
router
  .route("/:empId")
  .delete(deleteEmpById)
  .get(findEmpById)
  .patch(updateEmployee);
module.exports = router;
