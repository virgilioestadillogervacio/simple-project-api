const router = require("express").Router();

const ProjectController = require("../controllers/project");
const validate = require("../middlewares/schema/project");
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");

const controller = new ProjectController();

router.get("/", auth, role(["ADMIN"]), controller.getProjects);
router.get("/search", auth, role(["ADMIN", "EMPLOYEE", "CLIENT"]), controller.searchProjects);
router.get("/:id", auth, role(["ADMIN", "EMPLOYEE", "CLIENT"]), controller.getProject);
router.post("/", validate, auth, role(["ADMIN", "CLIENT"]), controller.createProject);
router.put("/:id", validate, auth, role(["ADMIN", "CLIENT"]), controller.updateProject);
router.delete("/:id", auth, role(["ADMIN"]), controller.deleteProject);

module.exports = router;
