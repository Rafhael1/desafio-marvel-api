// Styles
import { Nav, Logo } from './NavBar.Style'

// Components
import Search from '../../../Search/Search'

export default function NavBar({getAllCharacters, query, setQuery}: any) {
    return (
    <>
        <div>
            <Logo>My Super Hero</Logo>
        </div>
        <Nav>
            <Search getAllCharacters={getAllCharacters} query={query} setQuery={setQuery} />
        </Nav>
    </>
    )
}
