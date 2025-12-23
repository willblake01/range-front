import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, StyledSearch } from './styles';

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

      <DropDown isOpen={isOpen && (items.length > 0 || (!loading && inputValue))}>
        <div {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <DropDownItem
                {...getItemProps({ item, index })}
                key={item.id}
                highlighted={index === highlightedIndex}
              >
                <img src={item.image} alt={item.title} width='50' />
                {item.title}
              </DropDownItem>
            ))}

          {isOpen && !items.length && !loading && (
            <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
          )}
        </div>
      </DropDown>
    </>
  );
};

export { Search }
