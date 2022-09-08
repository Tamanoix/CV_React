import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

const ProjectList = () => {

    const state = {
        projects: portfolioData
    }

    const projects = state.projects;


    return (
        <div className='portfolioContent'>
            
            <ul className="radioDisplay">

            </ul>

            <div className="projects">
                {
                    projects.map((item) => {
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