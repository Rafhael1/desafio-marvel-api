import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// Transition
import { motion } from "framer-motion";

// Style
import { Wrapper } from './Main.Style';

// Pages
import Home from './components/containers/Home/Home';
import Results from './components/containers/Results/Results';
import ResultsDetails from './components/containers/Results/ResultsDetails/ResultsDetails';


function App() {

  // States
  
  const [ data, setData ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ redirect, setRedirect ] = useState(false);
  
  ///////

  // API Credentials

  const API_KEY = process.env.REACT_APP_MARVEL_APIKEY;
  const TIME_STAMP = process.env.REACT_APP_API_TIMESTAMP;
  const HASH = process.env.REACT_APP_API_HASH;

  ///////

  // URL's to fetch data
  const AllCharactersURL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${TIME_STAMP}&apikey=${API_KEY}&hash=${HASH}`;
  //////

  const getAllCharacters = async(e: any) => {
    e.preventDefault();
    setData([]);
    setRedirect(true);
    try {

      const res = await fetch(AllCharactersURL);

      const parsedData = await res.json();
      setData(parsedData.data.results);
      console.log(parsedData.data.results);

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Wrapper>
      <Router>
        <>
         <Switch>
            <Route exact path="/" render={() => !redirect ? <Home getAllCharacters={getAllCharacters} query={query} setQuery={setQuery} /> : <Redirect to="/results" /> }></Route>
            <Route exact path="/results" render={() => redirect ? <Results heroes={data} getAllCharacters={getAllCharacters} query={query} setQuery={setQuery} motion={motion}  /> : <Redirect to="/" />} ></Route>
            <Route path="/results/:id" render={() => <ResultsDetails motion={motion} />} ></Route>
         </Switch>       
        </>
      </Router>
    </Wrapper>
  );
}

export default App;
