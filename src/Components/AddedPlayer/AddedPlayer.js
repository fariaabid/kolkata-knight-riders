import React from 'react';
import './AddedPlayer.css';

const AddedPlayer = (props) => {
    const playerSelected = props.playerSelected;
    const { name, img, role,country,salary } = playerSelected;
    return (
        <div className='my-2 p-2 shadow text-center cart-item bg-success text-white rounded'>
            <img className='img-cart' src={img} alt="" />
            <div className='py-2'>
                <p><b>Name: </b>{name}</p>
                <p><b>Role: </b>{role}</p>
                <p><b>Country: </b>{country}</p>
                <p><b>Salary:</b> ${salary} Crore</p>
            </div>
        </div>
    );
};

export default AddedPlayer;