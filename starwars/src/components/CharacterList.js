import React, {useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
    const [characters, setCharacters] = useState([]);

    const defaultURL = 'https://swapi.co/api/people/';

    //console.log(props.filmCharacters)

    useEffect(() => {
        axios.get(defaultURL)
            .then(res => {
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log('I have a bad feeling about this.')
            })
    }, []);

    return (
        <Col className="characters" xs="12" sm="8">
            <Row>
                {
                    characters.map((c, index) => {
                        return (<CharacterCard key={index}char={c} />)
                    })
                }
            </Row>
        </Col>
    )
}

export default CharacterList;
