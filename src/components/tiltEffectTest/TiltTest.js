import React, { useState, useEffect } from 'react';

const TiltEffect = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setTilt({ x, y });
  };

  useEffect(() => {
    const element = document.getElementById('tilt-element');

    if (element) {
      element.addEventListener('mousemove', handleMouseMove);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []); // Run effect only once on mount

  const { x, y } = tilt;
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`,
  };

  return (
    <div id="tilt-element" style={tiltStyle}>
      <p>Contenu inclinable</p>
    </div>
  );
};

export default TiltEffect;