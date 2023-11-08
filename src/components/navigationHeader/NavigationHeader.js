import React, {useState, useEffect, useRef} from 'react';
import style from './navigationHeader.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';

const NavigationHeader = () => {

    const [scrollY, setScrollY] = useState(0);
    const [positionY, setPositionY] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarRef = useRef();
    
  
    useEffect(() => {
      const divElement = navBarRef.current;
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        const positionY = rect.top + window.scrollY;
  
        setPositionY(positionY);
      }
    }, [navBarRef.current]);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });  

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

        const menuBar = menuParts.map((menuPart, index)=>
        <a 
        href={menuPart.url} 
        key={index}
        >
            {menuPart.title}
        </a>)

    return (
    <div style={{position: 'absolute', width: '100vw',  height: '100vh'}}>

        <div className="navBar" 
            style={{position: scrollY < positionY ?'absolute' : 'fixed'}} ref={navBarRef}>
            {/* ☰ */}
                {menuBar}
        </div>  
    
        <div id="first" className="section">
        A propos de moi
        </div>
        <div id="second" className="section">
        Parcours
        </div>
        <div id="third" className="section">
        Projets pro
        </div>
        <div id="fourth" className="section">
        Projet perso
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