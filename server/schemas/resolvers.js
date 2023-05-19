const { Match, Organization, Sport, Team, User } = require('../models');

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

    createUser: async (parent, { name }) => {
      return User.create({ name });
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