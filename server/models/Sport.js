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
        startDate: {
            type: Date,
            required: true,
            min: new Date()
        },
        // list of teams registered
        // 5.20.23 - we need to pull the list of teams for the sport.
        registeredTeams: {
            type: Schema.Types.ObjectId,
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