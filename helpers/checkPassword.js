const bcrypt = require("bcryptjs");

const checkPassword = async (pwd, user_pwd) => await bcrypt.compare(pwd, user_pwd);

module.exports = checkPassword;
