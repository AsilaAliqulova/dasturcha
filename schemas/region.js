const { Schema, model } = require("mongoose");

const region = new Schema({
  name: {
    type: String,
    uppercase: true,
    requred: true,
    minLength: [3],
    uneque: true,
  },
});

module.exports = model("Region", region);
