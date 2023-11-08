import React from 'react';
import style from './slider.scss';
import pieuvre from '../../assets/images/pieuvre.jpg';
import pieuvreColoriage from '../../assets/images/pieuvre-coloriage.jpg';

const Slider = () => {

    document.addEventListener('DOMContentLoaded', function(){
      let banner = document.getElementById('banner-wrapper');
      let devLayer = banner.querySelector('.dev');
      let delta = 0;
      
      banner.addEventListener('mousemove', function(e){
          delta = (e.clientX-e.offsetX);
          devLayer.style.width = e.clientX + 500 - (banner.offsetWidth /window.innerWidth)*100 + (90-delta) +'px';
      });
  })

    return (
      <div className="container">
          <div className='banner-wrapper' id='banner-wrapper'>
          <div className='banner design'>
            <div className='banner-content'>
              <img src={pieuvreColoriage}/>
            </div>
          </div>
          <div className='banner dev'>
            <div className='banner-content'>
              <img src={pieuvre}/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;