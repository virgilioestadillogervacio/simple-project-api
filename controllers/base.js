const UserRepository = require("../repositories/user");
const ClientRepository = require("../repositories/client");
const EmployeeRepository = require("../repositories/employee");
const hashPassword = require("../helpers/hashPassword");

class BaseController {
  constructor() {
    this.user = new UserRepository();
    this.client = new ClientRepository();
    this.employee = new EmployeeRepository();
  }

  async register(usrInfo) {
    let usr;
    const { email, passwd, fname, lname, role } = usrInfo;

    const saveUser = async () => {
      const hashedPasswd = await hashPassword(passwd);
      return await this.user.saveUser(email, hashedPasswd, fname, lname, role);
    };

    switch (role) {
      case "ADMIN":
        usr = await saveUser();
        break;
      case "CLIENT":
        usr = await saveUser();
        usr = await this.client.saveClient(usr._id);
        break;
      case "EMPLOYEE":
        usr = await saveUser();
        usr = await this.employee.saveEmployee(usr._id);
        break;
    }

    return usr;
  }
}

module.exports = BaseController;
