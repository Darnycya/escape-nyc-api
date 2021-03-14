  
import React from 'react';
import './PlayerList.css';
import { Link } from 'react-router-dom'

const Player = (props) => {
    return (
        <>
            <Link className="player" to={`/players/${props._id}`}>
                <img className="player-image" src={props.image} alt={props.name} />
            </Link>
        </>
    )
}
export default Player