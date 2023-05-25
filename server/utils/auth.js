const jwt = require('jsonwebtoken');

const secret = 'biiiiiiiggggggsecrettt';
const expiration = '3h';

module.exports = {
    signToken: function ({ _id, email, userName, password, isCommissioner, isCaptain, isPlayer, isLeagueWorker }) {
        const payload = { _id, email, userName, password, isCommissioner, isCaptain, isPlayer, isLeagueWorker };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};