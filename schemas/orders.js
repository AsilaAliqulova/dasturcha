const { Schema, model } = require("mongoose");

const orders = new Schema({
  customer_name: { type: String, required:true, uppercase:true },
  total_price: {type:Number,min:[2000,"Umumiy hisob hato kiritildi"]},
  order_date: Date,
  fuel_station_id: {
    type: Schema.Types.ObjectId,
    ref: "Fuel_station",
  },
});

module.exports = model("Orders", orders);
