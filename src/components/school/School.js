import React from 'react';
import'./school.css';

const School = ({title, description}) => {


    return (
        <div className="experienceBackground" >
            <h3 className='schoolTitle'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default School;