const { Match, Organization, Sport, Team, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const Auth = require('../utils/auth')
const resolvers = {
  Query: {
    organization: async () => {
      return Organization.find();
    },
    sport: async () => {
      return Sport.find();
    },
    team: async () => {
      return Team.find();
    },
    match: async () => {
      return Match.find();
    },
    user: async () => {
      return User.find();
    },
  },

  Mutation: {

    createUser: async (_, args) => {
      // Extract the input arguments
      const {
        firstName,
        lastName,
        userName,
        email,
        password,
        birthDate,
        organizationName,
        isCommissioner,
        isCaptain,
        isPlayer,
        isLeagueWorker
      } = args;

      // Implement the logic to create a new user
      // Example: Assuming you have a User model and a create method
      const newUser = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
        birthDate,
        organizationName,
        isCommissioner,
        isCaptain,
        isPlayer,
        isLeagueWorker
      });

      // Return the token and user data
      return {
        token: signToken(newUser), // Generate a token for authentication
        user: {
          firstName: newUser.firstName,
          email: newUser.email
        }
      };
    },

    login: async (parent, { email, password}) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (_, { email, organizationName }) => {
      try {
        console.log("mutation met")
        const user = await User.findOne({email});
        if (!user) {
          throw new Error('User not found');
        }
        console.log(user)
        user.organizationName = organizationName;
        await user.save();
        return user
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (parent, { id }) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error(`No user found with this ID: ${id}`);
      }
      await user.remove();
      return user;
    },
    createOrg: async (parent, { name }) => {
      return Organization.create({ name });
    },
    updateOrg: async (parent, { id, name }) => {
      const organization = await Organization.findById(id);
      if (!organization) {
        throw new Error(`No organization with ID: ${id}`);
      }
      organization.name = name;
      await organization.save();
      return organization;
    },
    deleteOrg: async (parent, { id }) => {
      const organization = await Organization.findById(id);
      if (!organization) {
        throw new Error(`No organization with ID: ${id}`);
      }
      await organization.remove();
      return organization;
    },
    createSport: async (parent, { name, description, startDate }) => {
      return Sport.create({ name, description, startDate });
    },
    updateSport: async (parent, { id, name, description, startDate }) => {
      const sport = await Sport.findById(id);
      if (!sport) {
        throw new Error(`No sport with ID: ${id}`);
      }
      sport.name = name;
      sport.description = description;
      sport.startDate = startDate;
      await sport.save();
      return sport;
    },
    deleteSport: async (parent, { id }) => {
      const sport = await Sport.findById(id);
      if (!sport) {
        throw new Error(`No sport with ID: ${id}`);
      }
      await sport.remove();
      return sport;
    },
    createTeam: async (parent, { name, association, teamColor }) => {
      return Team.create({ name, association, teamColor });
    },
    updateTeam: async (parent, { id, name }) => {
      const team = await Team.findById(id);
      if (!team) {
        throw new Error(`No team with ID: ${id}`);
      }
      team.name = name;
      await team.save();
      return team;
    },
    deleteTeam: async (parent, { id }) => {
      const team = await Team.findById(id);
      if (!team) {
        throw new Error(`No team with ID: ${id}`);
      }
      await team.remove();
      return team;
    },
    createMatch: async (parent, { date, location, score }) => {
      return Match.create({ date, location, score });
    },
    updateMatch: async (parent, { id, score }) => {
      const match = await Match.findById(id);
      if (!match) {
        throw new Error(`No match with ID: ${id}`);
      }
      match.score = score;
      await match.save();
      return match;
    },
    deleteMatch: async (parent, { id }) => {
      const match = await Match.findById(id);
      if (!match) {
        throw new Error(`No match with ID: ${id}`);
      }
      await match.remove();
      return match;
    },
  },
}

module.exports = resolvers;