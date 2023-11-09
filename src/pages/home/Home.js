import React from 'react';
import style from './home.css';
import background from '../../assets/images/Accueil-portfolio-dev.png'

const Home = () => {
    
    return (
        <div className='containerHome'>
            <h1 className='titleHome'>Yanis Encognere developpeur</h1> 
            <img src={background} className='bgDevImage'/>
        </div>
    );
};

export default Home;