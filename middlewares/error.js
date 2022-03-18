const { json } = require("express");

const ErrorResponse = require("../utils/errorHandler");

// Function starts
const errorHandler = (err, req, res, next) => {
  let error = { ...err }; //Doubt: why used this. Without this CastError is working but objectID not exist condition not working.
  error.message = err.message;

  // Log to console for development
  process.env.NODE_ENV === "production" ? null : console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  // Mongoose dublicate key
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose ValidationError
  if (err.name === "ValidationError") {
    let message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  // Send HANDLED ERROR
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
