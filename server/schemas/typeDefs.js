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
        association: String!
        stats: Int!
        scheduleOfGames: [Date]
        teamColor: [String]
        roster: [String]
    }

    type Match {
        _id: ID!
        date: Date!
        location: String!
        teamsPlaying: [String]
        score: String!
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
        team: [String]
        isCommissioner: Boolean
        isCaptain: Boolean
        isPlayer: Boolean
        isLeagueWorker: Boolean
    }

    type Auth {
        token: ID!
        user: User
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
            team: [String]
            isCommissioner: Boolean
            isCaptain: Boolean
            isPlayer: Boolean
            isLeagueWorker: Boolean
        ): Auth
        login(email: String!, password: String!): Auth
        updateUser(
    email:String!
    organizationName: String
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
            association: String!
            scheduleOfGames: [Date]
            teamColor: [String]
        ): Team
        updateTeam(
            _id: ID!
            name: String!
            association: String!
            stats: Int!
            scheduleOfGames: [Date]
            teamColor: [String]
            roster: [String]
        ): Team
        deleteTeam(_id: ID!): Team
        createMatch(
            date: Date!
            location: String!
            teamsPlaying: [String]
        ): Match
        updateMatch(
            _id: ID!
            date: Date!
            location: String!
            teamsPlaying: [String]
            score: Int!
        ): Match
        deleteMatch(_id: ID!): Match
    }
`;


module.exports = typeDefs;