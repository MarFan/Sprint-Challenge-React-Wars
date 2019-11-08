import React, {useState} from 'react';
import axios from 'axios';
import {Col, Card, CardTitle, CardImg, CardImgOverlay} from 'reactstrap';

const CharCard = (props) => {
    const [homeWorld, setHomeWorld] = useState([]);

    function homePlanet(homeURL) {
        axios.get(homeURL)
            .then(res => {
                setHomeWorld(res.data);
            })
            .catch(err => {
                console.log('I feel a great disturbance in the force, as if millions of voices cried out in terror.')
            })
    }

    return (
        <Col className="charCard" xs="12" sm="4">
            <Card onClick={() => {homePlanet(props.char.homeworld)}}>
                <CardImg width="100%" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{props.char.name}</CardTitle>
                    <div className="card-text">
                        <div className="charDetail">GENDER: {props.char.gender}</div>
                        <div className="charDetail">HOME: {homeWorld.name}</div>
                        <div className="charDetail">HEIGHT: {props.char.height}</div>
                        <div className="charDetail">MASS: {props.char.mass}</div>
                    </div>
                </CardImgOverlay>
            </Card>
        </Col>
    )
}

export default CharCard;
  