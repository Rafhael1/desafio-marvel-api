import React, { useState, useEffect } from 'react'

// React Router
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

// Styles
import { Wrapper, ImgThumbnail, HeroName, HeroContainer, HeroDescription, NoDescription, Button, CR } from './ResultsDetails.Style'

// Icons
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ErrorIcon from '@material-ui/icons/Error';

// Components
import Loading from '../../../Loading/Loading';

export default function ResultsDetails() {
  
  // Credentials
  const API_KEY = process.env.REACT_APP_MARVEL_APIKEY;
  const TIME_STAMP = process.env.REACT_APP_API_TIMESTAMP;
  const HASH = process.env.REACT_APP_API_HASH;

  // State
  const [data, setData] = useState([])

  let {id}: any = useParams();
  
  const CharacterURL = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${TIME_STAMP}&apikey=${API_KEY}&hash=${HASH}`;

  const getCharacter = async() => {
    try {

      const res = await fetch(CharacterURL);

      const parsedData = await res.json();
      setData(parsedData.data.results);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCharacter();
  }, [])

    return (
    <Wrapper>
      <Link to="/" ><Button><ArrowBackIosRoundedIcon />Back</Button></Link>
        {
            !data.length ? <Loading /> :
            data.map((data: any) => {
              document.title = data.name;
              return (                   
                  <HeroContainer>
                    <div style={{textAlign: 'center'}} >
                      <ImgThumbnail src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
                    </div>
                      <HeroName>{data.name}</HeroName>                          
                        {
                        !data.description.length ? <NoDescription> <ErrorIcon /> No Description Available!</NoDescription> : 
                        <HeroDescription>
                          {data.description} 
                        </HeroDescription> 
                        }          
                  </HeroContainer>                 
              )
            }
            )
        }
        <CR>Data provided by © Marvel 2021 MARVEL</CR>
    </Wrapper>
    )
}
