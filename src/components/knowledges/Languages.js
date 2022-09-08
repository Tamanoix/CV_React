import React from 'react';
import ProgressBar from './ProgressBar';

const Languages = () => {

    const state = {
        languages : [
            { id: 1, value: "Javascript ES6+", xp: 1.8 },
            { id: 2, value: "PHP 8.1", xp: 1.5 },
            { id: 3, value: "CSS3 / HTML5", xp: 2 },
            { id: 4, value: "TypeScript", xp: 0.7 },
        ],
        frameworks : [
            { id: 1, value: "React.js", xp: 1.4 },
            { id: 2, value: "Symfony", xp: 1.3 },
            { id: 3, value: "Bootstrap", xp: 2 },
            { id: 4, value: "Sass", xp: 0.5 },
        ]
    }

    let languages = state.languages;
    let frameworks = state.frameworks;


    return (
        <div className='languagesFrameworks'>
            <ProgressBar 
                languages={languages} 
                className="languagesDisplay" 
                title="Langages" 
            />
            <ProgressBar 
                languages={frameworks}
                className="frameworksDisplay"
                title="Frameworks & Bibliothèques"
            />
        </div>
    );
};

export default Languages;