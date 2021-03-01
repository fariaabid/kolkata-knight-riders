import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data/data.json';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';



const Players = () => {
    const [player, setPlayer] = useState([]);
    const [cart, setCart] = useState([]);

    const handleCart = product => {
        const newAdded = ([...cart, product]);
        setCart(newAdded);
    }

    useEffect(() => {
        setPlayer(data);
    }, []);
    return (
        <React.Fragment>
            <div className='w-75 d-flex flex-wrap justify-content-around align-item-center'>
                {
                    player.map(p => <Player key={p.id} handleCart={handleCart} player={p}></Player>)
                }
            </div>
            <Cart player={cart}></Cart>
        </React.Fragment>
    );
};

export default Players;