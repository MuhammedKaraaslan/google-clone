import React from 'react'

import { SearchPageContainer } from './SearchPage.styles';

import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';

import SearchBody from '../../components/search-body/SearchBody'

import SearchHeader from '../../components/search-header/SearchHeader';

function SearchPage() {

  const [term] = useStateValue();
  const data = useGoogleSearch(term)

  return (
    <SearchPageContainer>
      <SearchHeader {...term} />
      {/* Results */}
      <div>
        {
          term &&
          (
            <SearchBody {...term} {...data} />
          )
        }
      </div>

    </SearchPageContainer>
  )
}

export default SearchPage