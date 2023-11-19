import React from 'react';
import './aboutme.css';
import perso from '../../assets/images/rond.png';
import data from '../../assets/texte/aboutme';
import BoutonCv from '../../components/boutonCv/BoutonCv';

const AboutMe = () => {

        const bulletPoint = data.presentation.map((presentation, index) => {
            return (
                <li key={index} className='listStyle'>
                    <p>{presentation}</p>
                </li>
            );
        }
    );

    return (
        <div className='containerAboutMe'>
                <img src={perso} className="shapePerso" alt="" />
                <div className="font">
                {bulletPoint}
                <BoutonCv/>     
                </div>    
        </div>
    );
};

export default AboutMe;