import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { img, name, role, salary, country } = props.player;

    return (
        <div className='shadow player m-2 px-3 py-2 rounded bg-secondary text-white'>
            <div className="d-flex">
                <img className='img align-self-center' src={img} alt="" />
                <div className='py-2 px-3'>
                    <h5><b>Name: </b>{name}</h5>
                    <h6><b>Role: </b>{role}</h6>
                    <p><b>Country</b> {country}</p>
                    <p><b>Salary:</b> ${salary} Crore</p>
                    <button onClick={(e) => {props.handleCart(props.player);   }} className={`btn btn-primary btn-sm px-4 btn-add`}>           <FontAwesomeIcon icon={faUserPlus} />           Add</button>
                </div>
            </div>
        </div >
    );
};

export default Player;