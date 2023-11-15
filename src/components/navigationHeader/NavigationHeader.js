import React, {useState, useEffect, useRef} from 'react';
import style from './navigationHeader.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import AboutMe from '../../pages/aboutMe/AboutMe';
import School from '../../pages/school/School';
import Perso from '../../pages/perso/perso';
import ImageProjet from '../imageProjet/ImageProjet';
import pieuvre from '../../assets/images/pieuvre.jpg';
import pieuvreCol from '../../assets/images/pieuvre-coloriage.jpg';
import NavBar from '../navBar/NavBar';
import Timeline from '../timeline/Timeline';

const NavigationHeader = () => {

    const menuParts =[
        {
            title:"A propos de moi",
            url:"#first"
        },
        {
            title:"Parcours",
            url:"#second"
        },
        {
            title:"Projets pro",
            url:"#third"
        },
        {
            title:"Projet perso",
            url:"#fourth"
        },
        {
            title:"Recommandation",
            url:"#fifth"
        },
        {
            title:"Contact",
            url:"#six"
        }]


    return ( 

    <div >
        <NavBar menuParts={menuParts}/>    
        <div id="first" className="section">
        A propos de moi
        <AboutMe/>
        </div>
        <div id="second" className="section">
        Parcours
        <Timeline/>
        </div>
        <div id="third" className="section">
        Projets pro
        <Perso><ImageProjet src={pieuvre} id={"img1"}/></Perso>
        <Perso><ImageProjet src={pieuvreCol} id={"img2"}/></Perso>
        </div>
        <div id="fourth" className="section">
        Projet perso
        <Perso><Slider/></Perso>
        <Perso><VideoPlayer/></Perso>
 
        </div>
        <div id="fifth" className="section">
        Recommandation
        </div>
        <div id="six" className="section">
        Contact
        </div>
    </div>
    );
};

export default NavigationHeader;