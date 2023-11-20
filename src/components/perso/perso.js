import React from 'react';
import './perso.css';
import useWidth from '../../hooks/useWidth';

const Perso = (props) => {
    const { title, description, children, left } = props;
    const {width}= useWidth();
    
    console.log(left)
    let responsiveContent = null;
        if (width > 900 && left) {
            responsiveContent = 
            <>    
                <div className='contentPerso'>
                        {children}
                </div>
                <div className='textePerso'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>   
            </>
        } else if(width > 900 && !left){
            responsiveContent =  <>    
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