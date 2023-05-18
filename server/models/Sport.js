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
        registeredTeams: {
            type: [String],
        },

        // schedule - not sure if this belongs here.
        
        // matches or results? -- not sure about this as such, may need Schema.Types.ObjectId.
        matchesPlayed: {
            type: [String],
        }
    }
)

const Sport = model('sport', sportSchema);

module.exports = Sport;