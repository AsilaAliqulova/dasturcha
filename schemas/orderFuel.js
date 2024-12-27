const { Schema, model } = require("mongoose");

const orderFuel = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "orders",
  },
  fuel_id: {
    type: Schema.Types.ObjectId,
    ref:"fuel"
  },
});

module.exports = model("OrderFuel", orderFuel);