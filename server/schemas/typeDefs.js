const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Organization {
        _id: ID!
        name: String!
        sports: [String]
        location: [String]
    }

    type Sport {
        _id: ID!
        name: String!
        description: String
        startDate: Date
        registeredTeams: [String]
        # schedule
        matchesPlayed: [String]
    }

    type Team {
        _id: ID!
        name: String!
        sportAssociation: String!
        stats: Int!
        scheduleOfGames: [Date]
        teamColors: [String]
        roster: [User.name]
    }

    type Match {
        _id: ID!
        date: Date!
        location: String!
        teamsPlaying: [Teams]
        score: Int!
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        email: String!
        password: String!
        birthDate: Date!
        organizationName: String!
        teams: [String]
        isCommissioner: Boolean
        isCaptain: Boolean
        isPlayer: Boolean
        isLeagueWorker: Boolean
    }
`;


module.exports = typeDefs;