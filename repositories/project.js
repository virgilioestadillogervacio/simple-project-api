const BaseRepository = require("./base");
const ProjectModel = require("../models/project");

class ProjectRepository extends BaseRepository {
  constructor() {
    super();
  }

  async createProject(name, usrId, role, employees) {
    let project, client;
    this.setUserId = usrId;

    if (role === "ADMIN") {
      client = await this.getUser;
    }

    if (role === "CLIENT") {
      client = await this.getClient;
    }

    project = new ProjectModel({ name, client: client._id, employees });

    return project.save();
  }

  async getProjects() {
    return await ProjectModel.find().populate("client employees");
  }

  async searchProjects(usrId, role) {
    let clientId, employee, client, user;
    this.setUserId = usrId;

    switch (role) {
      case "EMPLOYEE":
        employee = await this.getEmployee;

        return await ProjectModel.find({
          employees: {
            _id: employee._id,
          },
        }).populate("employees client");
      case "CLIENT":
        client = await this.getClient;
        clientId = client._id;
        break;
      case "ADMIN":
        user = await this.getUser;
        clientId = user._id;
    }

    return await ProjectModel.find({ client: clientId }).populate("employees client");
  }

  async getProject(usrId, role, projId) {
    let clientId, project, employee, client, user;
    this.setUserId = usrId;

    switch (role) {
      case "EMPLOYEE":
        employee = await this.getEmployee;

        project = await ProjectModel.find({
          employees: {
            _id: employee._id,
          },
        }).populate("client employees");

        return project.find((proj) => proj._id.toString() === projId);
      case "CLIENT":
        client = await this.getClient;
        clientId = client._id;
        break;
      case "ADMIN":
        user = await this.getUser;
        clientId = user._id;
    }

    project = await ProjectModel.find({ client: clientId }).populate("client employees");

    return project.find((proj) => proj._id.toString() === projId);
  }

  async findProject(id) {
    return await ProjectModel.findOne({ _id: id });
  }

  async updateProject(id, name) {
    return ProjectModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
        },
      },
      { new: true }
    );
  }

  async deleteProject(id) {
    return await ProjectModel.findOneAndDelete({ _id: id });
  }
}

module.exports = ProjectRepository;
