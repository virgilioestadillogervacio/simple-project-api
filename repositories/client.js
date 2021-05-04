const BaseRepository = require("./base");
const ClientModel = require("../models/client");

class ClientRepository extends BaseRepository {
  constructor() {
    super();
  }

  saveClient(userId) {
    const client = new ClientModel({ user: userId });
    return client.save();
  }

  getClients() {
    return ClientModel.find().populate("user", "-passwd");
  }

  getClient(id) {
    return ClientModel.findOne({ _id: id }).populate("user", "-passwd");
  }

  checkClient(id, clientId) {
    return ClientModel.findOne({
      _id: clientId,
      user: {
        _id: id,
      },
    }).populate("user", "-passwd");
  }

  async updateClient(id, clientInfo) {
    const { fname, lname, email, company, numOfEmployees } = clientInfo;
    const client = await ClientModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          company,
          numOfEmployees,
        },
      },
      { new: true }
    ).populate("user", "-passwd");

    client.user.fname = fname;
    client.user.lname = lname;
    client.user.email = email;

    await client.user.save();
    await client.save();

    return client;
  }

  async deleteClient(id) {
    const client = await ClientModel.findOneAndDelete({ _id: id }).populate("user", "-passwd");
    this.setUserId = client.user._id;

    await this.deleteUser;

    return client;
  }
}

module.exports = ClientRepository;
