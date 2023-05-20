const { Match, Organization, Sport, Team, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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

    createUser: async (parent, { firstName, lastName, userName, email, password, birthDate, organizationName }) => {
      const user = await User.create({ firstName, lastName, userName, email, password, birthDate, organizationName });
      const token = signToken(user);
      return { token, user };
    },
    // not sure how the jwt will work with this many parameters passed to user because jwt only uses name, email, password to sign a token. below is a potential work around.
    // createUser: async (parent, { firstName, lastName, userName, email, password, birthDate, organizationName }) => {
    //   const jwtUser = await User.create({ userName, email, password });
    //   const user = await User.create({ firstName, lastName, userName, email, password, birthDate, organizationName });
    //   const token = signToken(jwtUser);
    //   return { token, jwtUser };
    // },
    login: async (parent, { email, password }) => {
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
    createOrg: async (parent, { name }) => {
      return Organization.create({ name });
    },
    createSport: async (parent, { name }) => {
      return Sport.create({ name });
    },
    createTeam: async (parent, { name }) => {
      return Team.create({ name });
    },
    createMatch: async (parent, { name }) => {
      return Match.create({ name });
    },

    // updateUser: async (parent, { userId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // updateOrg: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // updateSport: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // updateTeams: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // updateMatch: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;