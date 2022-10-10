import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';
import { useState } from 'react';


const ProjectList = () => {

    const state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "react"},
            {id: 2, value: "javascript"},
            {id: 3, value: "php"},
            {id: 4, value: "css"},
        ]
    }

    const [selectedRadio, setSelectedRadio] = useState('react');
    const projects = state.projects;
    const radios = state.radios;

    const handleRadio = (e) => {
        setSelectedRadio(e.target.value);
    };


    return (
        <div className='portfolioContent'>
            
            <ul className="radioDisplay">
                {
                    radios.map((radio) => {
                        return (
                            <li key={radio.id}>
                                <input 
                                    type="radio" 
                                    name='radio'
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="projects">
                {
                    projects
                    .filter((item) => item.languages.includes(selectedRadio) )
                    .map((item) => {
                        return (
                            <Project 
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProjectList;