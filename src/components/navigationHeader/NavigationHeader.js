import React from 'react';
import './navigationHeader.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import AboutMe from '../../pages/aboutMe/AboutMe';
import Perso from '../perso/perso';
import ImageProjet from '../imageProjet/ImageProjet';
import idfmPic from '../../assets/images/idfm.jpg';
import dalidaPic from '../../assets/images/dalida.jpg';
import vegaPic from '../../assets/images/vega.jpg';
import photographiePic from '../../assets/images/photographie.jpg';
import NavBar from '../navBar/NavBar';
import Timeline from '../timeline/Timeline';
import Console from '../console/Console';
import ContactMobile from '../contactMobile/ContactMobile';
import {idfm, dalida, vega, montage, photo, digitalisation} from '../../assets/texte/projet';
import useWidth from '../../hooks/useWidth';

const NavigationHeader = () => {
    
    const {width}= useWidth();
    const menuParts =[
        {
            title:"A propos de moi",
            url:"#aboutMe"
        },
        {
            title:"Parcours",
            url:"#cursus"
        },
        {
            title:"Projets pro",
            url:"#professional"
        },
        {
            title:"Projet perso",
            url:"#personnal"
        },
        {
            title:"Recommandation",
            url:"#recommandation"
        },
        {
            title:"Contact",
            url:"#contact"
        }]


    return ( 

    <div >
        <NavBar menuParts={menuParts}/>    
        <div id="aboutMe" className="section">
            <h1>A propos de moi</h1>
            <AboutMe/>
        </div>
        <div id="cursus" className="section">
            <h1>Parcours</h1>
            <Timeline/>
        </div>
        <div id="professional" className="section">
            <h1>Projets pro</h1>
            <Perso title={idfm.title} description={idfm.description}><a href='https://prim.iledefrance-mobilites.fr/fr'><ImageProjet src={idfmPic} id={"idfm"}/></a></Perso>
            <Perso title={dalida.title} description={dalida.description}><ImageProjet src={dalidaPic} id={"dalida"}/></Perso>
            <Perso title={vega.title} description={vega.description}><ImageProjet src={vegaPic} id={"vega"}/></Perso>
        </div>
        <div id="personnal" className="section">
            <h1>Projet perso</h1>
            <Perso title={digitalisation.title} description={digitalisation.description}><Slider/></Perso>
            <Perso title={montage.title} description={montage.description}><VideoPlayer/></Perso>
            <Perso title={photo.title} description={photo.description}><ImageProjet src={photographiePic} id={"photographie"}/></Perso>
        </div>
        <div id="recommandation" className="section">
            <h1>Recommandation</h1>
        </div>
        <div id="contact" className="section">
            <h1>Contact</h1>
            {width > 900 ?  <Console/> : <ContactMobile/>}
        </div>
    </div>
    );
};

export default NavigationHeader;