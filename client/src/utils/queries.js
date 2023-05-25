import { gql } from '@apollo/client';

export const QUERY_ORG = gql`
query org {
  organization {
    _id
    location
    name
    sports
  }
} 
`;

export const QUERY_USER = gql`
query user {
  user {
    _id
    firstName
    lastName
    userName
    email
    password
    birthDate
    organizationName
    team
    isCommissioner
    isCaptain
    isPlayer
    isLeagueWorker
  }
}
`;

export const QUERY_SPORT = gql`
query sport {
  sport {
    _id
    description
    matchesPlayed
    name
    registeredTeams
    startDate
  }
}
`;

export const QUERY_TEAM = gql`
query team {
  team {
    teamColor
    name
    association
    _id
    roster{
      _id
      firstName
      lastName
    }
  }
}
`;

export const QUERY_MATCH = gql`
query match {
  match {
    _id
    date
    teamsPlaying
  }
}
`;

export const QUERY_ROSTER = gql`
query team {
    team {
        roster
    }
}
`;