const { Schema, model } = require('mongoose');
const Sport = require('Sport')
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
    stats:{
        type: Schema.Types.ObjectId,
        ref: 'Match',
        required: true,
    },
    scheduleOfGames:{
        type:[Date],
    },
    teamColors:{
        type:[String],
        required:true
    },
    roster:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
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