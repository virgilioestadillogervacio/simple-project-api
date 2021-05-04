const router = require("express").Router();

const EmployeeController = require("../controllers/employee");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/schema/employee");
const role = require("../middlewares/role");

const controller = new EmployeeController();

router.get("/", auth, role(["ADMIN", "EMPLOYEE", "CLIENT"]), controller.getEmployees);
router.get("/:id", auth, role(["ADMIN", "EMPLOYEE", "CLIENT"]), controller.getEmployee);
router.put("/:id", auth, validate, role(["ADMIN", "EMPLOYEE"]), controller.updateEmployee);
router.delete("/:id", auth, role(["ADMIN"]), controller.deleteEmployee);

module.exports = router;
