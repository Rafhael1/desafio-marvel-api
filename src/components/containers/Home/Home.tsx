import Search from '../../Search/Search'

import {
    Wrapper,
    Container,
    Logo,
    CR
} from './Home.Style'

export default function Home({getAllCharacters, query, setQuery}: any) {
    return (
        <Wrapper>
            <Container>
                <Logo>My Super Heroes</Logo>
                <Search getAllCharacters={getAllCharacters} query={query} setQuery={setQuery} />
                <CR>Data provided by © Marvel 2021 MARVEL</CR>
            </Container>
        </Wrapper>
    )
}
