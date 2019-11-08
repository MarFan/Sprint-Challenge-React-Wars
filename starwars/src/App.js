import React, {useState} from 'react';
import {Container, Row} from 'reactstrap';
import FilmList from './components/FilmList'
import CharacterList from './components/CharacterList'
import './App.css';

import axios from 'axios';

const App = () => {
  const [currentFilm, setCurrentFilm] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const apiURL = 'https://swapi.co/api/';

  // useEffect(() => {
  //   axios.get('https://swapi.co/api/')
  //     .then
  // })

  // useEffect(() => {
    
  // }, [currentFilm])

  function filmSelect(episode){
    axios.get(apiURL+'films/'+episode)
    .then(res => {
      setCurrentFilm(res.data);
    })
    .catch(err => {
      console.log('ERROR: The movie has turned to the darkside!')
    })
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <h1 className="Header">React Wars - {currentFilm.title}</h1>
        </Row>        
      </Container>
      <Container>
        <Row>
          <FilmList filmSelect={filmSelect} />
          <CharacterList filmCharacters={currentFilm.characters}/>
        </Row>

      </Container>

    </div>
  );
}

export default App;
