import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {


    return (
        <div className='contact'>

            <Navigation />

            <div className="contactContent">

                <div className="header"></div>

                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Eyguières</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0635224804">
                                <span className='clickInput' onClick={() => alert('Téléphone copié !')}>06 35 22 48 04</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="tamanoix@gmail.com">
                                <span className='clickInput' onClick={() => alert('Email copié !')}>tamanoix@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/benoit-krzesinski-088196220/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Tamanoix" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h4>Codepen</h4>
                            <i className="fab fa-codepen"></i>
                        </a> */}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;