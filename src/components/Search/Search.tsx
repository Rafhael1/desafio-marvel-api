import React from 'react'

import { Placer, SearchContainer, SearchInput, Icon } from './Search.Style'

import thorHammer from '../../assets/svg/thor-hammer.svg'

export default function Search({getAllCharacters, query, setQuery}: any) {
    return (
        <>
            <Placer>
                <SearchContainer onSubmit={getAllCharacters} >
                    <SearchInput required placeholder="Search For Heroes..." name="query" value={query} onChange={e => setQuery(e.target.value)} />
                    <Icon src={thorHammer} onClick={(e) => getAllCharacters(e)} />
                </SearchContainer>
            </Placer>
        </>
    )
}
