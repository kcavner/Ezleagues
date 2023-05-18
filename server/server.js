const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// require schemas, resolvers and typedefs
// require connection to db

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    // typedefs
    // resovlers,
    // jwt middleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set static path to client build folder

// get route to grab build's index.html

const startApolloServer = async () => {
    await server.start();
    // apply/use jwt middleware

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}!`);
        })
    })
};

startApolloServer();