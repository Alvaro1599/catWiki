import React from 'react';
import { Link } from 'react-router-dom';
function Option(props) {
    return (
        <Link className='p-2 rounded-xl hover:bg-gray-200' to={`/description/${props.id}`}>
            {props.name}
        </Link>
    );
}

export default Option;
