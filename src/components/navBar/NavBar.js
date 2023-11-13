import React, {useEffect,useState,useRef} from 'react';
import style from './navBar.css';

const NavBar = ({menuParts}) => {

    const navBarRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    const [positionY, setPositionY] = useState(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const divElement = navBarRef.current;
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        const positionY = rect.top + window.scrollY;
        setPositionY(positionY);
      }
    }, [navBarRef.current]);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        if (scrollY>positionY) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    },[scrollY])
   

    const menu = menuParts.map((menuPart, index)=>{
        return(
        <a 
            href={menuPart.url}  
            key={index}
            className='navBarTitle'
        >
            {menuPart.title}
        </a>)
    })

    return (
        <div className='containerNavBar'>
            <div className={`navBar ${isFixed ? 'fixed' : null}`} ref={navBarRef}>
                    {menu}
            </div>
       </div>
    );
};

export default NavBar;