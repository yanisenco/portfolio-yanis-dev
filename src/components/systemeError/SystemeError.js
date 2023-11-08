import React from 'react';
import BoutonBackHome from '../boutonBackHome/BoutonBackHome';

const SystemeError = () => {
    return (
        <div>

            <video autoPlay muted loop poster="Poster404.png">
                <source
                    src="ERROR404.mp4"
                    type="video/mp4"
                />
            </video>
            <div class="content">
                <h1>ERROR 404 : NOT FOUND</h1>

                <BoutonBackHome />
            </div>





        </div>
    );
};

export default SystemeError;