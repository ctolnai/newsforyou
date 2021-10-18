const { Schema, model } = require('mongoose');

const categroySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  }
);

const Categroy = model('Categroy', categroySchema);

module.exports = Categroy;
