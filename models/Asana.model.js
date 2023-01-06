const { Schema, model } = require("mongoose");

const asanaSchema = new Schema(
  {
    nameEnglish: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    nameSanskrit: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    level: {
      type: Number,
      enum: [1, 2, 3],
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Asana = model("Asana", asanaSchema);

module.exports = Asana;
