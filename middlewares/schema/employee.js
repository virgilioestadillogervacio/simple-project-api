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
    position: {
      in: ["body"],
      notEmpty: true,
      errorMessage: "Position field is empty.",
    },
    yearOfExperience: {
      in: ["body"],
      notEmpty: {
        errorMessage: "Years of experience field is empty.",
      },
      isNumeric: {
        errorMessage: "Years of experience field is not a number",
      },
      toInt: true,
    },
  });
})();
