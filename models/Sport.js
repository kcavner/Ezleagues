const { Schema, model } = require('mongoose');
// require any related dbs

const sportSchema = new Schema(
    {
        // sport name
        // sport description
        // league dates
        // list of teams registered
        // schedule
        // matches or results?
    }
)

const Sport = model('sport', sportSchema);

module.exports = Sport;