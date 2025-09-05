const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNum: req.body.modelNum,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully Created an Airplane !!",
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating plane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
