const { checkSchema } = require("express-validator");

module.exports = (() => {
  return checkSchema({
    email: {
      in: ["body"],
      isEmail: true,
      errorMessage: "Invalid email address.",
    },
    fname: {
      in: ["body"],
      notEmpty: true,
      errorMessage: "First name field is empty.",
    },
    lname: {
      in: ["body"],
      notEmpty: true,
      errorMessage: "Last name field is empty.",
    },
    company: {
      in: ["body"],
      notEmpty: true,
      errorMessage: "Company field is empty.",
    },
    numOfEmployees: {
      in: ["body"],
      notEmpty: {
        errorMessage: "Number of employees field is empty.",
      },
      isNumeric: {
        errorMessage: "Number of employees field is not a number",
      },
      toInt: true,
    },
  });
})();
