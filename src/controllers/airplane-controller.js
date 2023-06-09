const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req, res) {
    console.log("Inside airplane controller")
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.message = "Successfully created an airplane";
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.message = "Error occured while creating airplane";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.message = "Successfully retrieved airplanes";
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error) {

    }
}

async function getAirplane(req, res) {
    try {
        console.log(req.params)
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.message = "Found the airplane";
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirplane(req, res) {
    try {
        console.log(req.body);
        console.log(req.params);
        await AirplaneService.updateAirplane(req.params.id, req.body);
        SuccessResponse.message = "Successfully updated airplane";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.json(ErrorResponse);
    }
}

async function deleteAirplane(req, res) {
    try {
        await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.message = "Successfully deleted the airplane";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error) {
        ErrorResponse.error = error;
        return res.json(ErrorResponse);
    }
}

module.exports =  {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    deleteAirplane
}
