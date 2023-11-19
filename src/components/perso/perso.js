import React,{useEffect} from 'react';
import style from './perso.css';
import Slider from '../slider/Slider';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import useWidth from '../../hooks/useWidth';

const Perso = (props) => {

    const { title, description, children } = props;

    const {width}= useWidth();
    
    let responsiveContent = null;
        if (width > 900) {
            responsiveContent = 
            <>
                <div className='textePerso'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>   
                <div className='contentPerso'>
                     {children}
                </div>
            </>
        } else {
            responsiveContent = 
                <div className='textePerso'>
                    <h2>{title}</h2>
                    <div className='contentPerso'>
                        {children}
                    </div>
                    <p>{description}</p>
                </div>   
        }


    return (
        <div className='containerPerso'>
            {responsiveContent}
        </div>
    );
};

export default Perso;