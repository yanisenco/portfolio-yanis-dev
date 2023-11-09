import React from 'react';
import style from './aboutme.css';
import perso from '../../assets/images/avatar.svg';
import data from '../../assets/texte/aboutme';

const AboutMe = () => {

    const bulletPoint = data.presentation.map((presentation) => {
        return (
            <li className=''>{presentation}</li>
        );
    }
);

    return (
        <div className='containerAboutMe'>
                <img src={perso} className="shapePerso" alt="" />
                <div className="font">
                {bulletPoint}
                <button className='buttonCv'>CV</button>        
                </div>    
        </div>
    );
};

export default AboutMe;