const { Schema, model } = require('mongoose');
// require any related dbs

const teamSchema = new Schema(
    {
        // team name
        // sport association
        // stats (may replace 'record')
        // schedule of games (association)
        // team colors
        // player list (roster)

        // s
        // need a function that builds team record
    }
)
const Team = model('team', teamSchema);

module.exports = Team;