import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Benoit Krzesinski <br /> Tamanoix</h1>
                    <h2>Développeur Web Front-End</h2>
                    <div className="pdf">
                        <a href="../media/CV_Benoit_Krzesinski.pdf" download>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;