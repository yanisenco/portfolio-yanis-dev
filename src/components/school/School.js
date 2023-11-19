import React from 'react';
import'./school.css';

const School = ({title, description}) => {


    return (
        <div className="experienceBackground" >
            <h4 className='schoolTitle'>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default School;