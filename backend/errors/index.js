const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-request");
const CustomAPIError = require("./custom-error");
const NotFoundError = require("./not-found");

module.exports = {
  NotFoundError,
  UnauthenticatedError,
  CustomAPIError,
  BadRequestError,
};