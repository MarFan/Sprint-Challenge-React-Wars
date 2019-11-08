import React from 'react';
import {Row, Col, Card} from 'reactstrap';

// import posters for each movie
import poster_1 from '../posters/poster_1.png'
import poster_2 from '../posters/poster_2.png'
import poster_3 from '../posters/poster_3.png'
import poster_4 from '../posters/poster_4.png'
import poster_5 from '../posters/poster_5.png'
import poster_6 from '../posters/poster_6.png'
import poster_7 from '../posters/poster_7.png'

const FilmList = (props) => {
    return (
        <Col xs="12" sm="4">
            <Row>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(1)}><img key="1" src={poster_1} className="img-fluid" alt="The Phantom Menace" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(2)}><img key="2" src={poster_2} className="img-fluid" alt="Attack of the Clones" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(3)}><img key="3" src={poster_3} className="img-fluid" alt="Revenge of the Sith" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(4)}><img key="4" src={poster_4} className="img-fluid" alt="A New Hope" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(5)}><img key="5" src={poster_5} className="img-fluid" alt="The Empire Strikes Back" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(6)}><img key="6" src={poster_6} className="img-fluid" alt="Return of the Jedi" /></Card></Col>
                <Col xs="6" className="poster"><Card onClick={() => props.filmSelect(7)}><img key="7" src={poster_7} className="img-fluid" alt="The Force Awakens" /></Card></Col>
            </Row>
        </Col>
    )
}

export default FilmList;