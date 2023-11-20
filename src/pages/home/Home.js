import React from 'react';
import './home.css';
import background from '../../assets/images/webp/Accueil-portfolio-dev.webp'

const Home = () => {
    
    return (
        <div className='containerHome '>
            <div className='homeText'>
                <h1 className='titleHome '>Yanis Encognere</h1> 
                <p >developpeur front end</p>
            </div>
            <img src={background} className='bgDevImage' alt={"ordinateur fond d'écran accueil"}/>
        </div>
    );
};

export default Home;