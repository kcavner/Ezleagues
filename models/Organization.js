const { Schema, model } = require('mongoose');
// require any related dbs

const organizationSchema = new Schema(
    {
        // organization name
        // Sports offered (array of sports)
        // field/location names (array of fields)
    }
)
const Organization = model('organization', organizationSchema);

module.exports = Organization;