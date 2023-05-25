import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                userName
            }
        }
    }
`;
// building these in apollo sandbox then coping over for simplicity
export const CREATE_USER = gql`
mutation createUser($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!, $birthDate: Date!, $organizationName: String!, $isCommissioner: Boolean, $isCaptain: Boolean, $isPlayer: Boolean, $isLeagueWorker: Boolean) {
  createUser(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password, birthDate: $birthDate, organizationName: $organizationName, isCommissioner: $isCommissioner, isCaptain: $isCaptain, isPlayer: $isPlayer, isLeagueWorker: $isLeagueWorker) {
    token
    user {
      firstName
      email
    }
  }
}


`;

export const CREATE_ORG = gql`
mutation CreateOrg($name: String!, $location: String!) {
  createOrg(name: $name, location: $location) {
    _id
    name
    location
  }
}
`;

export const CREATE_MATCH = gql`
mutation createMatch($date: Date!, $teamsPlaying: [String], $location: String!) {
  createMatch(date: $date, teamsPlaying: $teamsPlaying, location: $location) {
    _id
    teamsPlaying
    location
    date
  }
}
`;

export const CREATE_TEAM = gql`
mutation createTeam($name: String!, $association: String!, $teamColor: [String]) {
  createTeam(name: $name, association: $association, teamColor: $teamColor) {
    _id
    name
    association
    teamColor
  }
}
`;

export const CREATE_SPORT = gql`
mutation createSport($name: String!, $description: String, $startDate: Date) {
  createSport(name: $name, description: $description, startDate: $startDate) {
    name
    description
    startDate
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($id: ID!, $userName: String!, $email: String!, $password: String!, $organizationName: String!) {
  updateUser(_id: $id, userName: $userName, email: $email, password: $password, organizationName: $organizationName) {
    _id
    email
    organizationName
    team
    userName
    password
  }
}
`;

export const UPDATE_ORG = gql`
mutation UpdateOrg($id: ID!, $sports: String) {
  updateOrg(_id: $id, sports: $sports) {
    _id
    name
    sports
    location
  }
}
`;

export const UPDATE_MATCH = gql`
mutation UpdateMatch($id: ID!, $date: Date!, $location: String!, $score: Int!, $teamsPlaying: [String]) {
  updateMatch(_id: $id, date: $date, location: $location, score: $score, teamsPlaying: $teamsPlaying) {
    _id
    date
    location
    score
    teamsPlaying
  }
}
`;

export const UPDATE_TEAM = gql`
mutation UpdateTeam($id: ID!, $name: String!, $association: String!, $stats: Int!) {
  updateTeam(_id: $id, name: $name, association: $association, stats: $stats) {
    teamColor
    stats
    scheduleOfGames
    roster
  }
}
`;

export const UPDATE_SPORT = gql`
mutation UpdateSport($id: ID!, $name: String!) {
  updateSport(_id: $id, name: $name) {
    startDate
    registeredTeams
    matchesPlayed
  }
}
`;

export const DELETE_ORG = gql`
mutation DeleteOrg($id: ID!) {
  deleteOrg(_id: $id) {
    _id
    location
    name
    sports
  }
}
`;

export const DELETE_MATCH = gql`
mutation DeleteMatch($id: ID!) {
  deleteMatch(_id: $id) {
    _id
    date
    location
    score
    teamsPlaying
  }
}
`;

export const DELETE_TEAM = gql`
mutation DeleteTeam($id: ID!) {
  deleteTeam(_id: $id) {
    _id
    name
    association
    stats
    scheduleOfGames
    teamColor
    roster
  }
}
`;

export const DELETE_SPORT = gql`
mutation DeleteSport($id: ID!) {
  deleteSport(_id: $id) {
    _id
    name
    description
    startDate
    registeredTeams
    matchesPlayed
  }
}
`;

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
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