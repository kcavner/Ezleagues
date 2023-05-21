const { Schema, model } = require('mongoose');
const Team = require('./Team');
// require time formater from utils

const matchSchema = new Schema({
  date: {
    type: Date,
    // date formater util?
  },
  // location currently just a string, does not reference another model, this may be fine, but locations do exist in the Org model..
  location: {
    type: String,
    required: true,
  },
  // teamsPlaying needs to be reworked so it references the two teams playing each other
  teamsPlaying: [String],
  // this needs to be reworked to a string that the League Worker will enter. We can then just call the string later when needed.
  score: {
    type: String,
  },
});

const Match = model("match", matchSchema);

module.exports = Match;