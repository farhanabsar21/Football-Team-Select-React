import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Players.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const {name,country, position, salary, image} = props.player;
    const icon = <FontAwesomeIcon icon={faPlus} />;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div>
            <Card className="player-card">
                <Card.Img variant="left" src={image}></Card.Img>
                <Card.Body className="player-card-body">
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p><strong>International Team:</strong> {country}</p>
                        <p><strong>Position:</strong> {position}</p>
                        <p><strong>Salary:</strong> ${salary}</p>
                        <button onClick={() => handleAddPlayer(props.player)}><span>{icon}</span> Add Player</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Players;