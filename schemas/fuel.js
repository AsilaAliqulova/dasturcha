const { Schema, model } = require("mongoose");

const fuel = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Yoqilg'i nomi xato kiritildi"],
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: "fuelType",
  },
  price: Number,
});

module.exports = model("Fuel", fuel);
