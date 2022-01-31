import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to={`/description/${props.id}`} className='w-[23%] mob:w-[200px] mob:mb-4 '>
            <img className='rounded-3xl mb-4 w-full h-60 object-cover' src={props.img} alt={props.id} />
            <h1 className='font-bold'>{props.name}</h1>
        </Link>
    );
}

export default Card;
