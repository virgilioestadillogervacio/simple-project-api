const { checkSchema } = require("express-validator");

module.exports = (() => {
  return checkSchema({
    email: {
      in: ["body"],
      isEmail: true,
      errorMessage: "Invalid email address",
    },
    passwd: {
      in: ["body"],
      isLength: {
        options: { min: 8 },
      },
      errorMessage: "Password should at least 8 characters long.",
    },
  });
})();
