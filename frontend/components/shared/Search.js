import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const StyledSearch = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 2px solid var(--green);
  border-radius: 50px;
  height: max-content;
  max-width: 328px;
  input {
    width: 100%;
    padding: 8px 16px;
    border: 0;
    border-radius: 50px;
    font-size: 1.6rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

const StyledDropDown = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  background: white;
  border: ${(props) => (props.isOpen ? '1px solid var(--lightGrey)' : 'none')};
`;

const StyledDropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : props.theme.white)};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
  ${(props) => (props.highlighted ? props.theme.lightgrey : props.theme.white)};
  img {
    margin-right: 10px;
  }
`;

const Search = () => {
  const router = useRouter();
  
  const [findItems, { loading, data }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache',
  });

  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);

  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange({ inputValue }) {
      findItemsButChill({ variables: { searchTerm: inputValue } });
    },
    onSelectedItemChange({ selectedItem }) {
      if (!selectedItem) return;
      router.push(`/product/${selectedItem.id}`);
    },
    itemToString: (item) => item?.title || '',
  });

  return (
    <>
      <StyledSearch>
        <div {...getComboboxProps()}>
          <label
            id='search-label'
            htmlFor='search'
            style={{ position: 'absolute', left: '-9999px' }}
          >
            Search Products
          </label>

          <input
            {...getInputProps({
              id: 'search',
              type: 'search',
              placeholder: 'Search',
              className: loading ? 'loading' : undefined,
              'aria-labelledby': 'search-label', // optional: force your own
            })}
          />
        </div>
      </StyledSearch>
      <StyledDropDown isOpen={isOpen && (items.length > 0 || (!loading && inputValue))}>
        <div {...getMenuProps()}>
          {isOpen &&
            items?.map((item, index) => (
              <StyledDropDownItem
                {...getItemProps({ item, index })}
                key={item.id}
                highlighted={index === highlightedIndex}
              >
                <img src={item.image} alt={item.title} width='50' />
                {item.title}
              </StyledDropDownItem>
            ))}

          {isOpen && !items.length && !loading && (
            <StyledDropDownItem>Sorry, No items found for {inputValue}</StyledDropDownItem>
          )}
        </div>
      </StyledDropDown>
    </>
  );
};

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: products(
      where: {
        OR: [
          { brand_contains: $searchTerm }
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      brand
      title
      image
    }
  }
`;

export { Search }
