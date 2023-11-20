import React from 'react';
import './aboutme.css';
import perso from '../../assets/images/webp/rond.webp';
import data from '../../assets/texte/aboutme';
import BoutonCv from '../../components/boutonCv/BoutonCv';

const AboutMe = () => {

        const bulletPoint = data.presentation.map((presentation, index) => {
            return <p key={index} className='listStyle'>{presentation}</p>;
        }
    );

    return (
        <div className='containerAboutMe'>
                <img src={perso} className="shapePerso" alt={"portrait cv"} />
                <div className="font">
                {bulletPoint}
                <BoutonCv/>     
                </div>    
        </div>
    );
};

export default AboutMe;