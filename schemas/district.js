const { Schema, model } = require("mongoose");

const district = new Schema({
  name: {
    type:String,
    required:true,
    uppercase:true,
    minjLength:[3]
  },
  region_id: {
    type:Schema.Types.ObjectId,
    ref:"region"
  },
});

module.exports = model("District", district);
