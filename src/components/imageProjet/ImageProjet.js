import React, { useEffect, useState } from 'react';
import './imageProjet.css';

const ImageProjet = ({src, id, style,alt}) => {

    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
  
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
  
      setTilt({ x, y });
    };
  
    useEffect(() => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('mousemove', handleMouseMove);
  
        return () => {
          element.removeEventListener('mousemove', handleMouseMove);
        };
      }
    }, []);

    const { x, y } = tilt;
    const tiltStyle = {
      transform: `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`,
    };

  return (
        <div onMouseMove={handleMouseMove} onMouseLeave={()=>setTilt({ x: 0, y: 0 })} className='containerImageProjet' style={style}>
              <img src={src} className='imageProjet shadowImageProjet' style={tiltStyle} id={id} alt={alt}/>
        </div>
  );
};

export default ImageProjet;