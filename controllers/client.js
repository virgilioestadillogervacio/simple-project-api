const { validationResult } = require("express-validator");

const ClientRepository = require("../repositories/client");
const UserRepository = require("../repositories/user");
const ApiErrorUtil = require("../utils/ApiError");

class ClientController {
  constructor() {
    this.client = new ClientRepository();
    this.user = new UserRepository();
  }

  get getClients() {
    return async (_req, res, next) => {
      try {
        const clients = await this.client.getClients();

        res.status(200).json({ data: clients });
      } catch (err) {
        next(err);
      }
    };
  }

  get getClient() {
    return async (req, res, next) => {
      try {
        const { id } = req.params;

        const client = await this.client.getClient(id);
        if (!client) {
          throw ApiErrorUtil.notFound("Client is not found!");
        }

        res.status(200).json({ data: client });
      } catch (err) {
        next(err);
      }
    };
  }

  get updateClient() {
    return async (req, res, next) => {
      try {
        const clientId = req.params.id;
        const clientInfo = req.body;
        const usrId = req.payload.id;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        let client = await this.client.getClient(clientId);
        if (!client) {
          throw ApiErrorUtil.notFound("Client is not found!");
        }

        const user = await this.user.checkSomeEmail(usrId, clientInfo.email);
        if (user) {
          throw ApiErrorUtil.conflict(`${user.email} is already taken`);
        }

        client = await this.client.checkClient(usrId, clientId);
        if (!client) {
          throw ApiErrorUtil.notFound("Client is not found!");
        }

        client = await this.client.updateClient(clientId, clientInfo);

        res.status(200).json({ data: client });
      } catch (err) {
        next(err);
      }
    };
  }

  get deleteClient() {
    return async (req, res, next) => {
      try {
        const clientId = req.params.id;

        let client = await this.client.getClient(clientId);
        if (!client) {
          throw ApiErrorUtil.notFound("Client is not found!");
        }

        client = await this.client.deleteClient(clientId);

        res.status(200).json({ data: client });
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = ClientController;
