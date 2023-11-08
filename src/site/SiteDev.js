import React from 'react';
import Home from 'src/pages/home/Home';
import Contact from 'src/pages/contact/Contact';
import AboutMe from 'src/pages/aboutMe/AboutMe';
import NavigationHeader from 'src/components/navigationHeader/NavigationHeader';

const SiteDev = () => {
    return (
        <div>
            <Home/>
            <NavigationHeader/> 
           
            {/* <HorizontalCarousel/>
             <AboutMe />
            <Contact />*/}
        </div>
    );
};

export default SiteDev;