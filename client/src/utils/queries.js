import { gql } from '@apollo/client';

export const getTrainerList_Q = gql`
  query GetTrainerList {
    getTrainerList {
      _id
      trainerFirstName
      trainerLastName
      trainerEmail
      calendarLink
    }
  }
`;