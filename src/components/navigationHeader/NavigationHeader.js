import React from 'react';
import './navigationHeader.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import AboutMe from '../../pages/aboutMe/AboutMe';
import Perso from '../perso/perso';
import ImageProjet from '../imageProjet/ImageProjet';
import idfmPic from '../../assets/images/webp/idfm2.webp';
import dalidaPic from '../../assets/images/webp/dalida2.webp';
import vegaPic from '../../assets/images/webp/vega.webp';
import photographiePic from '../../assets/images/webp/photographie2.webp';
import NavBar from '../navBar/NavBar';
import Timeline from '../timeline/Timeline';
import Console from '../console/Console';
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
        }];

        let style = null;
        if(width > 900){
            style = {margin: 'auto 2vw auto 0'};
        }

    return ( 

    <div >
        <NavBar menuParts={menuParts}/>    
        <div id="aboutMe" className="section">
            <h1 className='titlePart'>A propos de moi</h1>
            <AboutMe/>
        </div>
        <div id="cursus" className="section">
            <h1 className='titlePart'>Parcours</h1>
            <Timeline/>
        </div>
        <div id="professional" className="section">
            <h1 className='titlePart'>Projets pro</h1>
            <Perso title={idfm.title} description={idfm.description} left={false}><a href='https://prim.iledefrance-mobilites.fr/fr'><ImageProjet src={idfmPic} id={"idfm"} alt={"site prim île de france mobilité"}/></a></Perso>
            <Perso title={dalida.title} description={dalida.description} left={true}><ImageProjet src={dalidaPic} id={"dalida"} style={style} alt={"application métier dalida"}/></Perso>
            <Perso title={vega.title} description={vega.description} left={false}><ImageProjet src={vegaPic} id={"vega"} alt={"image confidentielle"}/></Perso>
        </div>
        <div id="personnal" className="section">
            <h1 className='titlePart'>Projet perso</h1>
            <Perso title={digitalisation.title} description={digitalisation.description} left={false}><Slider/></Perso>
            <Perso title={montage.title} description={montage.description} left={true}><div style={style}><VideoPlayer /></div></Perso>
            <Perso title={photo.title} description={photo.description} left={false}><ImageProjet src={photographiePic} id={"photographie"} alt={"photographie de champignon"}/></Perso>
        </div>
        <div id="recommandation" className="section">
            <h1 className='titlePart'>Recommandation</h1>
        </div>
        <div id="contact" className="section">
            <h1 className='titlePart'>Contact</h1>
            {width > 900 ?  <Console desktop={true}/> : <Console desktop={false}/>}
        </div>
    </div>
    );
};

export default NavigationHeader;