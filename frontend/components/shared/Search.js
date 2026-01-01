import { useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';

const glow = keyframes`
  from {
    box-shadow: 0 0 0.2rem 0 rgba(255, 255, 0, 0.2);
  }
  to {
    box-shadow: 0 0 1rem 0.2rem rgba(255, 255, 0, 0.8);
  }
`;

const StyledSearch = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 0.2rem solid var(--green);
  border-radius: 5rem;
  height: max-content;
  width: 26rem;
  input {
    width: 100%;
    padding: 0.8rem 1.6rem;
    border: 0;
    border-radius: 5rem;
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
  border: ${(props) => (props.isOpen ? '0.1rem solid var(--lightGrey)' : 'none')};
  max-height: calc(8 * (5.2rem + 2rem));
  overflow-y: auto;
`;

const StyledDropDownItem = styled.div`
  border-bottom: 0.1rem solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : props.theme.white)};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 1rem solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : props.theme.white)};

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: contain;
    background: var(--White);
    border-radius: 0.6rem;
    flex: 0 0 5.2rem;
    margin-right: 1rem;
    padding: 0.4rem;
  }
`;

const Search = () => {
  const router = useRouter();
  
  const [findItems, { loading, data }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache',
  });

  const items = data?.searchTerms || [];
  const findItemsButChill = useMemo(
    () => debounce(findItems, 350),
    [findItems]
  );

  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    id: 'product-search',
    items,
    onInputValueChange({ inputValue }) {
      const term = (inputValue || '').trim();
      const dashed = term.replace(/\s+/g, '-'); // 'sleeping bags' -> 'sleeping-bags'
      findItemsButChill({ variables: { searchTerm: term, dashedTerm: dashed } });
    },
    onSelectedItemChange({ selectedItem }) {
      if (!selectedItem) return;
      router.push(`/product/${selectedItem.id}`);
    },
    itemToString: (item) => item?.title || '',
  });

  useEffect(() => {
    return () => findItemsButChill.cancel();
  }, [findItemsButChill]);

  return (
    <>
      <StyledSearch>
        <div {...getComboboxProps()}>
          <label
            id='search-label'
            htmlFor='search'
            style={{ position: 'absolute', left: '-999.9rem' }}
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
                <div className='thumb'>
                  <img src={item.image} alt={item.title} width='50' />
                </div>
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
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!, $dashedTerm: String!) {
    searchTerms: products(
      where: {
        OR: [
          { brand_contains: $searchTerm }
          { title_contains: $searchTerm }
          { category_contains: $searchTerm }
          { category_contains: $dashedTerm }
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
