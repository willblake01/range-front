import React from 'react';
import { Query } from '@apollo/client/react/components';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Search from './Search';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      brand
      category
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const SearchStyle = styled.div`
  border: 4px solid ${props => props.theme.green};
  margin-bottom: 20px;
`;

class Items extends React.Component {
  render() {
    return (
      <>
        <SearchStyle>
          <Search />
        </SearchStyle>
        <Center>
          <Query query={ALL_ITEMS_QUERY}>
            {({data, error, loading}) => {
              if(loading) return <p>Loading...</p>
              if(error) return <p>Error: {error.message}</p>
              return (
                <ItemsList>
                  {data.items.map(item => <Item item={item} key={item.id} />)}
                </ItemsList>
              );
            }}
          </Query>
        </Center>
      </>
    )
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
