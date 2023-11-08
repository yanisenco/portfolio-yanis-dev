import React from 'react';
import style from './aboutme.css';
import perso from 'src/assets/images/avatar.svg';
import data from 'src/assets/texte/aboutme';

const AboutMe = () => {

    const bulletPoint = data.presentation.map((presentation) => {
        return (
            <li className='text-slate-200 mt-5 text-xl m-16 list-none'>{presentation}</li>
        );
    }
);

    return (
        <div>
            <div className="h-screen">
                <img src={perso} className="shapePerso w-104" alt="" />
                <div className="text-white">
                {bulletPoint}
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;