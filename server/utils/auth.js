const jwt = require('jsonwebtoken');

const secret = 'biiiiiiiggggggsecrettt';
const expiration = '3h';

module.exports = {
    signToken: function ({ email, userName, password }) {
        const payload = { email, userName, password };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};