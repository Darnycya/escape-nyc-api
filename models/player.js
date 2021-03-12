const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    position: { type: String, required: true },
    jerseyNumber: { type: Number, required: true}
  },
  { timestamps: true }
  );

module.exports = mongoose.model('players', Player)