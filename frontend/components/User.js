import { gql, useQuery } from '@apollo/client';

const useUser = () => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  return {
    user: data?.user ?? null,
    loading,
    error
  };
};

const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      firstName
      lastName
      email
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

export { CURRENT_USER_QUERY, useUser };
