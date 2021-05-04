const router = require("express").Router();

const ClientController = require("../controllers/client");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/schema/client");
const role = require("../middlewares/role");

const controller = new ClientController();

router.get("/", auth, role(["ADMIN"]), controller.getClients);
router.get("/:id", auth, role(["ADMIN", "CLIENT"]), controller.getClient);
router.put("/:id", auth, validate, role(["CLIENT"]), controller.updateClient);
router.delete("/:id", auth, role(["ADMIN"]), controller.deleteClient);

module.exports = router;
