const { validationResult } = require("express-validator");

const EmployeeRepository = require("../repositories/employee");
const UserRepository = require("../repositories/user");
const ApiErrorUtil = require("../utils/ApiError");

class EmployeeController {
  constructor() {
    this.employee = new EmployeeRepository();
    this.user = new UserRepository();
  }

  get getEmployees() {
    return async (_req, res, next) => {
      try {
        const employees = await this.employee.getEmployees();

        res.status(200).json({ data: employees });
      } catch (err) {
        next(err);
      }
    };
  }

  get getEmployee() {
    return async (req, res, next) => {
      try {
        const { id } = req.params;

        const employee = await this.employee.getEmployee(id);
        if (!employee) {
          throw ApiErrorUtil.notFound("Employee is not found!");
        }

        res.status(200).json({ data: employee });
      } catch (err) {
        next(err);
      }
    };
  }

  get updateEmployee() {
    return async (req, res, next) => {
      try {
        const employeeId = req.params.id;
        const employeeInfo = req.body;
        const usrId = req.payload.id;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        let employee = await this.employee.getEmployee(employeeId);
        if (!employee) {
          throw ApiErrorUtil.notFound("Employee is not found!");
        }

        const user = await this.user.checkSomeEmail(usrId, employeeInfo.email);
        if (user) {
          throw ApiErrorUtil.conflict(`${user.email} is already taken`);
        }

        employee = await this.employee.checkEmployee(usrId, employeeId);
        if (!employee) {
          throw ApiErrorUtil.notFound("Employee is not found! noooooooo");
        }

        employee = await this.employee.updateEmployee(employeeId, employeeInfo);

        res.status(200).json({ data: employee });
      } catch (err) {
        next(err);
      }
    };
  }

  get deleteEmployee() {
    return async (req, res, next) => {
      try {
        const employeeId = req.params.id;

        let employee = await this.employee.getEmployee(employeeId);
        if (!employee) {
          throw ApiErrorUtil.notFound("Employee is not found!");
        }

        employee = await this.employee.deleteEmployee(employeeId);
        res.status(200).json({ data: employee });
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = EmployeeController;
