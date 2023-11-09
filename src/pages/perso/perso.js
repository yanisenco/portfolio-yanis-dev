import React,{useEffect} from 'react';
import style from './perso.css';
import Slider from '../../components/slider/Slider';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';

const Perso = () => {

    const width = window.innerWidth;
    let responsiveContent = null;
        if (width > 900) {
            responsiveContent = 
            <>
                <div className='textePerso'>
                    <h1>Digitalisation</h1>
                    <p>Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association</p>
                </div>   
                <div className='contentPerso'>
                    {/* <VideoPlayer/> */}
                     <Slider /> 
                </div>
            </>
        } else {
            responsiveContent = 
                <div className='textePerso'>
                    <h1>Digitalisation</h1>
                    <div className='contentPerso'>
                    {/* <VideoPlayer/> */}
                        <Slider/>
                    </div>
                    <p>Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association Voici un projet de numérisation de dession que j'ai pu effectuer sur photoshop pour un evenement porté par une association</p>
                </div>   
        }


    return (
        <div className='containerPerso'>
            {responsiveContent}
        </div>
    );
};

export default Perso;