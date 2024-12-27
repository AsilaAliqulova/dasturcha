const { Schema, model } = require("mongoose");

const fuelType = new Schema({
  type: { type: String, required: true, unique: true },
});

module.exports = model("FuelType", fuelType);
