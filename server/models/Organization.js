const { Schema, model } = require('mongoose');
// const Sport = require('./Sport');
// const Match = require('./Match');

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true,
        max_length: 50,
    },
    // reference the sports schema or separate from sports schema reference a sports array
    sports: [String],
    // can reference from the match schema probably easiest
    location: [
        {
            type: String,
            ref: 'Match',
        }
    ],
});

const Organization = model('organization', organizationSchema);

module.exports = Organization;