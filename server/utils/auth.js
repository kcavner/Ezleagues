const jwt = require('jsonwebtoken');

const secret = 'biiiiiiiggggggsecrettt';
const expiration = '3h';

module.exports = {
    signToken: function ({ email, userName, password, isCommissioner, isCaptain, isPlayer, isLeagueWorker }) {
        const payload = { email, userName, password, isCommissioner, isCaptain, isPlayer, isLeagueWorker };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};