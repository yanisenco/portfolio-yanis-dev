import React, {useState, useEffect, useRef} from 'react';
import style from './navigationHeader.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import AboutMe from '../../pages/aboutMe/AboutMe';
import School from '../school/School';
import Perso from '../perso/perso';
import ImageProjet from '../imageProjet/ImageProjet';
import pieuvre from '../../assets/images/pieuvre.jpg';
import pieuvreCol from '../../assets/images/pieuvre-coloriage.jpg';
import NavBar from '../navBar/NavBar';
import Timeline from '../timeline/Timeline';
import Console from '../console/Console';
import ContactMobile from '../contactMobile/ContactMobile';
import useWidth from '../../hooks/useWidth';

const NavigationHeader = () => {
    
    const {width}= useWidth();
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
            <h1>A propos de moi</h1>
            <AboutMe/>
        </div>
        <div id="second" className="section">
            <h1>Parcours</h1>
            <Timeline/>
        </div>
        <div id="third" className="section">
            <h1>Projets pro</h1>
            <Perso><ImageProjet src={pieuvre} id={"img1"}/></Perso>
            <Perso><ImageProjet src={pieuvreCol} id={"img2"}/></Perso>
        </div>
        <div id="fourth" className="section">
            <h1>Projet perso</h1>
            <Perso><Slider/></Perso>
            <Perso><VideoPlayer/></Perso>
        </div>
        <div id="fifth" className="section">
            <h1>Recommandation</h1>
        </div>
        <div id="six" className="section">
            <h1>Contact</h1>
            {width > 900 ?  <Console/> : <ContactMobile/>}
        </div>
    </div>
    );
};

export default NavigationHeader;