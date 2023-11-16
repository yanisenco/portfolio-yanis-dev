import React from 'react';
import'./school.css';

const School = ({title, description, style}) => {


    return (
                <div style={style}>
                    <div className="experienceBackground" >
                        <h2 className='schoolTitle'>{title}</h2>
                        <p className='schoolDescription'>{description}</p>
                    </div>
                </div>
    );
};

export default School;