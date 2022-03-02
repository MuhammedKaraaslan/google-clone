import React from 'react'

import styled from 'styled-components';

import { useStateValue } from '../../StateProvider';

function SearchPage() {

  const [{ term }, dispatch] = useStateValue();

  return (
    <SearchPageContainer>
      <h1>{term}</h1>
    </SearchPageContainer>
  )
}

export default SearchPage


export const SearchPageContainer = styled.div`

`;