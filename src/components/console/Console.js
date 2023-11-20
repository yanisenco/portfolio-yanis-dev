import React, {useState, useEffect, useRef} from 'react';
import data from '../../assets/texte/contact';
import './console.css';
import useWidth from '../../hooks/useWidth';

const Console = ({desktop}) => {

    const contacts = data.contacts.map((contact) => {
        return <a href={contact.personalLink} className='contactText'>{contact.path}{contact.message}</a>;
        }
    );
    const {width}= useWidth();
    const parentRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: width/4, y: 0 });




useEffect(() => {
  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const newX = initialPos.x + event.clientX - initialPos.clientX;
    const newY = initialPos.y + event.clientY - initialPos.clientY;

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (isDragging) {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  } else {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
}, [isDragging, initialPos]);

const handleMouseDown = (event) => {
  if (desktop) {    
    event.preventDefault();
    setIsDragging(true);
    setInitialPos({
      x: position.x,
      y: position.y,
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
};

let style = null;
if (desktop) {
  style ={
    position:'absolute',
    top: position.y,
    left: position.x,
    cursor: 'move',
}
}

    return (
        <div className='containerConsole'>
            <div 
                className="sizeConsole" 
                id="invite-de-contact"
                style={style}
                onMouseDown={handleMouseDown}
                ref={parentRef}
            >
                <div className="headerConsole">
                    <div className="flex">
                        <div className='closeButton'></div>
                        <div className='reduceButton'></div>
                        <div className='extendButton'></div>
                        <h2 className="titleConsole">C:\_ contact prompt</h2>
                    </div>                
                </div>
                <div className="contentConsole">
                    <p className='descriptionContent'>Yanis Portfolio [version 2.0.19045.2364]</p>
                    <p>(c) Yanis Corporation. All rights reserved.</p>
                    {contacts}             
                </div>
            </div>
        </div>

    );
};

export default Console;