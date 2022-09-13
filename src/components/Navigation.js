import React from 'react';
import PhotoCV from '../media/photo_cv.jpg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const classNameFunc = ({ isActive }) => (isActive ? "navActive" : "");

    return (
        <div className='sidebar'>

            <div className="id">
                <div className="idContent">
                    <img src={PhotoCV} alt="Photo CV" />
                    <h3>Benoit <br /> Krzesinski</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" end className={classNameFunc}>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" end className={classNameFunc}>
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" end className={classNameFunc}>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" end className={classNameFunc}>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/benoit-krzesinski-088196220/" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Tamanoix" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li> */}
                </ul>
                
                <div className='signature'>
                    <a href="#">Tamanoix - 2022</a>
                </div>
            </div> 

        </div>
    );
};

export default Navigation;