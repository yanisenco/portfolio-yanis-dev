import React, { useEffect, useState } from 'react';
import './slider.scss';
import pieuvre from '../../assets/images/webp/pieuvre2.webp';
import pieuvreColoriage from '../../assets/images/webp/pieuvre-coloriage2.webp';
import fleche from '../../assets/images/double-fleche.png';

const Slider = () => {

  const [clipValue, setClipValue]= useState('0, 165px, auto, 0');
  const [offsetX, setOffsetX] = useState(null);
  const [onHover, setOnHover]= useState(false);

  const handleMouseMove = (e) => {
    setOnHover(true);
    const element = e.target;
    const x = e.clientX - element.getBoundingClientRect().left;
    setOffsetX(x);
  };

  useEffect(()=>{
    setClipValue(`0, ${offsetX}px, auto, 0`)
  },[offsetX])

  return (
        <div onMouseMove={handleMouseMove} id="container" className='containerSlider'>
              <img src={fleche} className='image-3' id="fleche" alt="flèches directionnelles"
              style={{ left: '155px',top: '85px',display : onHover && 'none' }}
              />
              <img src={pieuvre} className='image-1' id="topImage" style={{ clip: `rect(${clipValue})`}} alt="dessin digitalisé de pieuvre"/>
              <img src={pieuvreColoriage} className='image-2' id="bottomImage" alt="dessin de pieuvre"/>
      </div>
  );
};

export default Slider;