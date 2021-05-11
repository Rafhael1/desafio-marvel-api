import { Link } from "react-router-dom";

// Imports
import Loading from '../../Loading/Loading';
import NavBar from './NavBar/NavBar';

// Icons
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

// Styled Components
import { Wrapper, 
    HeroContainer, 
    HeroName, 
    ImgThumbnail, 
    LearnMore, 
    ContentContainer, CR } from './Results.Style';

export default function Results({heroes, getAllCharacters, query, setQuery, motion}: any) {
    return (
        <Wrapper >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.6 }} >
                <NavBar getAllCharacters={getAllCharacters} query={query} setQuery={setQuery} />
            {
                !heroes.length ? <Loading /> : 
                heroes.map((hero: any) => (
                    <HeroContainer key={hero.id} >
                        <ImgThumbnail src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}  />
                        <ContentContainer>
                            <HeroName>{hero.name}</HeroName> 
                            <Link to={`results/${hero.id}`}><LearnMore>Learn More <ArrowForwardIosRoundedIcon /></LearnMore></Link>
                        </ContentContainer>
                    </HeroContainer>
                ))
            }
            <CR>Data provided by © Marvel 2021 MARVEL</CR>
        </motion.div>
        </Wrapper>
    )
}
