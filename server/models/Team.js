const { Schema, model } = require('mongoose');
const Sport = require('./Sport');
// require any related dbs

const teamSchema = new Schema(
{
        // team name
    teamName:{
        type:String,
        required: true,
        trim: true
    },
    sportAssociation:{
        type: Schema.Types.ObjectId,
        ref: 'Sport',
        required: true,
    },
    // this needs to be reworked. used to be a reference to Match. Currently just a string.
    stats:{
        type: String
    },
    scheduleOfGames:{
        type:[Date],
    },
    teamColors:{
        type:[String],
        required:true
    },
    // 5.20.23 commented out required while trouble shooting seeding.
    // 5.21.23 turned this into an array of user IDs.
    roster:{
        type: [Schema.Types.ObjectId],
        ref:"User",
        // required:true
    }
}
        // sport association
        // stats (may replace 'record')
        // schedule of games (association)
        // team colors
        // player list (roster)

        // s
        // need a function that builds team record
  
)
const Team = model('team', teamSchema);

module.exports = Team;