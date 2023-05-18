const { Schema, model } = require('mongoose');
// require any related dbs

const userSchema = new Schema(
    {
        // first
        // last
        // user name
        // email
        // password
        // birth date
        // organization
        // teams
        // isCommisioner
        // isPlayer
        // isCapt
        // isLeagueWorker
    }
)

const User = model('user', userSchema);

module.exports = User;