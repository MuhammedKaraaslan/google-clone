import React from 'react'
import { Result, Results, ResultsCount, ResultSnippet, ResultTitle } from './SearchBody.styles'

function SearchBody({ term, data }) {
    return (
        <Results>
            <ResultsCount>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} second) for {term}</ResultsCount>
            {
                data?.items.map(item =>
                    <Result key={item.link} >
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.lenght > 0
                                && item.pagemap?.cse_image[0].src && (
                                    <img src={item.pagemap?.cse_image[0].src} alt='result' />
                                )}
                            {item.displayLink}
                        </a>
                        <ResultTitle href={item.link}>
                            <h2>{item.title}</h2>
                        </ResultTitle>
                        <ResultSnippet className='searchPage__resultSnippet'>
                            {item.snippet}
                        </ResultSnippet>
                    </Result>
                )
            }
        </Results >
    )
}

export default SearchBody
