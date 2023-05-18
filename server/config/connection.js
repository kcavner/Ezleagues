const mongoose = require('mongoose');
// database address once created
mongoose.connect(process.env.MONGODB_URI || '');

module.exports = mongoose.connection;