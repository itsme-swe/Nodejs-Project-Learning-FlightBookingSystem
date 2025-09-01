const { StatusCodes } = require("http-status-codes"); // This is how we use status codes in our app

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is Live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
