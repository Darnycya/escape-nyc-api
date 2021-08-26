const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Trail = new Schema(
  {
    name: { type: String, required: true },
    trailUrl: { type: String, required: true },
    difficulty: { type: String, required: true },
    distanceFromNyc: { type: Number, required: true },
    climbingTime: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('trails', Trail)