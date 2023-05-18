const { Schema, model } = require('mongoose');
// require any related dbs

const matchSchema = new Schema(
    {
        // date of match (and time?)
        // field/locations
        // teams playing
        // score
    }
)

const Match = model('match', matchSchema);

module.exports = Sport;