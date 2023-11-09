import React, { useEffect, useState } from 'react';
import style from './slider.scss';
import pieuvre from '../../assets/images/pieuvre.jpg';
import pieuvreColoriage from '../../assets/images/pieuvre-coloriage.jpg';

const Slider = () => {

  const [clipValue, setClipValue]= useState('0, auto, auto, 0')
  const [offsetX, setOffsetX] = useState(null);

  const handleMouseMove = (e) => {
    const element = e.target;
    const x = e.clientX - element.getBoundingClientRect().left;
    setOffsetX(x);
  };

  useEffect(()=>{
    setClipValue(`0, ${offsetX}px, auto, 0`)
  },[offsetX])

  return (
        <div onMouseMove={handleMouseMove} id="container">
              <img src={pieuvre} className='image-1' id="topImage" style={{ clip: `rect(${clipValue})`}}/>
              <img src={pieuvreColoriage} className='image-2' id="bottomImage"/>
      </div>
  );
};

export default Slider;