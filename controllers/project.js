const { validationResult } = require("express-validator");

const ProjectRepository = require("../repositories/project");
const ApiErrorUtil = require("../utils/ApiError");

class ProjectController {
  constructor() {
    this.project = new ProjectRepository();
  }

  get getProjects() {
    return async (_req, res, next) => {
      try {
        const projects = await this.project.getProjects();

        res.status(200).json({ data: projects });
      } catch (err) {
        next(err);
      }
    };
  }

  get searchProjects() {
    return async (req, res, next) => {
      try {
        const { id, role } = req.payload;

        const projects = await this.project.searchProjects(id, role);

        res.status(200).json({ data: projects });
      } catch (err) {
        next(err);
      }
    };
  }

  get getProject() {
    return async (req, res, next) => {
      try {
        const { id, role } = req.payload;
        const projectId = req.params.id;

        const project = await this.project.getProject(id, role, projectId);

        if (!project) {
          throw ApiErrorUtil.notFound("Project is not found!");
        }

        res.status(200).json({ data: project });
      } catch (err) {
        next(err);
      }
    };
  }

  get createProject() {
    return async (req, res, next) => {
      try {
        const { name, employees } = req.body;
        const { id, role } = req.payload;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        const project = await this.project.createProject(name, id, role, employees);

        res.status(201).json({ data: project });
      } catch (err) {
        next(err);
      }
    };
  }

  get updateProject() {
    return async (req, res, next) => {
      try {
        const { name } = req.body;
        const { id, role } = req.payload;
        const projectId = req.params.id;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        let project = await this.project.getProject(id, role, projectId);
        if (!project) {
          throw ApiErrorUtil.notFound("Project is not found!");
        }

        project = await this.project.updateProject(project._id, name);

        res.status(200).json({ data: project });
      } catch (err) {
        next(err);
      }
    };
  }

  get deleteProject() {
    return async (req, res, next) => {
      try {
        const projectId = req.params.id;

        let project = await this.project.findProject(projectId);
        if (!project) {
          throw ApiErrorUtil.notFound("Project is not found!");
        }

        project = await this.project.deleteProject(project._id);

        res.status(200).json({ data: project });
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = ProjectController;
