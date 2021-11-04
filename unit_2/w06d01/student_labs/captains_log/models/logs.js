const { Schema, model } = require("mongoose");

const logSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = model("logs", logSchema);
