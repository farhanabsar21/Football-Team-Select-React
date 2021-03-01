import React from 'react';
import playerData from "../Data/playerData.json";
import { useEffect, useState } from 'react';
import Players from '../Players/Players';
import "./PlayerBoard.css";
import Cart from '../PlayerCart/Cart';



function PlayerBoard() {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player)=>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    useEffect(()=>{
      setPlayers(playerData)
    },[]);

    return (
        <div>
            <div className="players-container">
                <div className="player-detail">
                    <div className="player-header">
                        <h2>Liverpool Players For First Team</h2>
                    </div>
                    <div className="player-list">
                        {players.map(player => 
                            <Players 
                            player={player} 
                            key={player.id} 
                            handleAddPlayer={handleAddPlayer}>

                            </Players>)}
                    </div>
                </div>
                <div className="player-cart">
                    <h2>Player Selection Board</h2>
                    <h3>Player Added: <strong>{cart.length}</strong></h3>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
}

export default PlayerBoard;