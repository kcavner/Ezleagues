const { Schema, model } = require('mongoose');
const sportSchema = require('./Sport');
const Match = require('./Match');

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true,
        max_length: 50,
    },
    sports: [sportSchema],
    location: [
        {
            type: String,
            ref: 'Match',
        }
    ],
});

const Organization = model('organization', organizationSchema);

module.exports = Organization;