import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>

            <h3>Intérêts</h3>

            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pieds</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnée</span>
                </li>
                <li className="hobby">
                    <i class="fa-solid fa-pencil"></i>
                    <span>Ecriture</span>
                </li>
                <li className="hobby">
                    <i class="fa-solid fa-dice"></i>
                    <span>Jeux de société / vidéos</span>
                </li>
                <li className="hobby">
                    <i class="fa-solid fa-music"></i>
                    <span>Musique</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;