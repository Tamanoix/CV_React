import React from 'react';

const Project = (props) => {

    const { name, languagesIcons, source, info, picture } = props.item;


    return (
        <div>

            <h3>{name}</h3>
            
        </div>
    );
};

export default Project;