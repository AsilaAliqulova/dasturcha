const { Schema, model } = require("mongoose");

const fuelPrice = new Schema({
  fuel_station_id: {
    type: Schema.Types.ObjectId,
    ref: "Fuel_station",
  },
  fuel_type_id: {
    type: Schema.Types.ObjectId,
    ref: "fuelType",
  },
  price: {
    type:Number,
    min:[2000,"Yoqilg'i narxi xato kiritildi"]
  },
});

module.exports = model("FuelPrice", fuelPrice);
