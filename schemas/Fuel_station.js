const { Schema, model } = require("mongoose");

const fuelStation = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  address: {
    type: String,
    unique: true,
  },
  location: { type: String, maxLength: [3] },
  phone: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{2}-\d{3}-\d{2}-\d{2}$/.test(value);
      },
      message: (props) => `${props.value}-raqam noto'g'ri`,
    },
  },
  region_id: {
    type: Schema.Types.ObjectId,
    ref: "region",
  },
  district_id: {
    type: Schema.Types.ObjectId,
    ref: "district",
  },
});

module.exports = model("FuelStation", fuelStation);
