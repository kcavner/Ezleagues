const { Schema, model } = require('mongoose');
// require any related dbs

const sportSchema = new Schema(
    {
        // sport name
        sportName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        // sport description
        sportDescription:{
            type: String,
            maxlength: 1000
        },
        // league dates
        // 5.20.23 removed the default date constraint
        startDate: {
            type: Date,
            required: true,
        },
        // list of teams registered
        // 5.20.23 - we need to pull the list of teams for the sport.
        // 5.21.23 - fixed so that this now holds an array of team ids.
        registeredTeams: {
            type: [Schema.Types.ObjectId],
            ref: 'Team'
        },

        // schedule - not sure if this belongs here.
        
        // matches or results? -- not sure about this as such, may need Schema.Types.ObjectId.
        // 5.20.23 - changing this to a reeference to Match model
        matchesPlayed: {
            type: Schema.Types.ObjectId,
            ref: 'Match'
        }
    }
)

const Sport = model('sport', sportSchema);

module.exports = Sport;