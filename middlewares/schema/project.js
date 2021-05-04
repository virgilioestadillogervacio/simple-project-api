const { checkSchema } = require("express-validator");

module.exports = (() => {
  return checkSchema({
    name: {
      in: ["body"],
      notEmpty: true,
      errorMessage: "Name is empty.",
    },
  });
})();
