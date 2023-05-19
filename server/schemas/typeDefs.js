const { gql } = require('apollo-server-express');
const { GraphQLDate } = require('graphql-scalars');

const typeDefs = gql`
 scalar Date
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
        roster: [User]
    }

    type Match {
        _id: ID!
        date: Date!
        location: String!
        teamsPlaying: [String]
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

    type Query {
        organization: [Organization]
        sport: [Sport]
        team: [Team]
        match: [Match]
        user: [User]
    }

    type Mutation {
        createUser(
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
        ): User
        updateUser(
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
        ): User
        deleteUser(_id: ID!): User
        createOrg(
            name: String!
            location: String!
        ): Organization
        updateOrg(
            _id: ID!
            sports: String
        ): Organization
        deleteOrg(_id: ID!): Organization
        createSport(
            name: String!
            description: String
            startDate: Date
        ): Sport
        updateSport(
            _id: ID!
            name: String!
            description: String
            startDate: Date
            registeredTeams: [String]
            # schedule
            matchesPlayed: [String]
        ): Sport
        deleteSport(_id: ID!): Sport
        createTeam(
            name: String!
            sportAssociation: String!
            scheduleOfGames: [Date]
            teamColors: [String]
        ): Team
        updateTeam(
            _id: ID!
            name: String!
            sportAssociation: String!
            stats: Int!
            scheduleOfGames: [Date]
            teamColors: [String]
            roster: [User]
        ): Team
        deleteTeam(_id: ID!): Team
        createMatch(
            date: Date!
            location: String!
            teamsPlaying: [Team]
        ): Match
        updateMatch(
            _id: ID!
            date: Date!
            location: String!
            teamsPlaying: [Team]
            score: Int!
        ): Match
        deleteMatch(_id: ID!): Match
    }
`;


module.exports = typeDefs;