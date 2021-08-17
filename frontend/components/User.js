import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      firstName
      lastName
      email
      cart {
        id
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.user;
}

export { CURRENT_USER_QUERY, useUser };
