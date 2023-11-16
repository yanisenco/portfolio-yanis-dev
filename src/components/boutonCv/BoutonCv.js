import React from 'react';
import CV from '../../assets/pdf/cvStageEtranger.pdf';
import './boutonCv.css';

const BoutonCv = () => {

    const telechargerPDF = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'CV_Yanis_ENCOGNERE.pdf'; 
        link.click();
      };

    return (
        <button onClick={telechargerPDF} className='boutonCv'>mon cv</button>
    );
};

export default BoutonCv;