const { Schema, model } = require('mongoose');
const teamsSchema = require('./Team');
// require time formater from utils

const matchSchema = new Schema({
  date: {
    type: Date,
    // date formater util?
  },
  location: {
    type: String,
    required: true,
  },
  teamsPlaying: [teamsSchema],
  // score will also have to reference the teamsPlaying object?
  score: {
    type: Number,
    required: true,
  },
});

const Match = model("match", matchSchema);

module.exports = Match;