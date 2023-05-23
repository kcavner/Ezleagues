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

// export const CREATE_ORG = gql``;

// export const CREATE_MATCH = gql``;

// export const CREATE_TEAM = gql``;

export const CREATE_SPORT = gql`
mutation createSport($name: String!, $description: String, $startDate: Date) {
  createSport(name: $name, description: $description, startDate: $startDate) {
    name
    description
    startDate
  }
}
`;

// export const UPDATE_USER = gql``;

// export const UPDATE_ORG = gql``;

// export const UPDATE_MATCH = gql``;

// export const UPDATE_TEAM = gql``;

// export const UPDATE_SPORT = gql``;

// export const DELETE_ORG = gql``;

// export const DELETE_MATCH = gql``;

// export const DELETE_TEAM = gql``;

// export const DELETE_SPORT = gql``;

// export const DELETE_USER = gql``;