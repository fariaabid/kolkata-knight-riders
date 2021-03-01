import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddedPlayer from '../AddedPlayer/AddedPlayer';

const Cart = (props) => {
    const player = props.player;
    const totalSalary = player.reduce((total, newAdded) => total + Math.round(newAdded.salary), 0);
    return (
        <div className='w-25' >
            <h5>Player added: {player.length}</h5>
            <h6 className="cart">Total Team Budget: $ {totalSalary} Crore</h6>
            {
                player.map((playerSelected) => <AddedPlayer key={playerSelected.id} playerSelected={playerSelected}></AddedPlayer>)
            }
        </div>
    );
};

export default Cart;