import React, { useState } from 'react';
import data from '../data.json';
import '../index.css'



function Planets() {
    const { destinations } = data;
    const [selectedDestination, setSelectedDestination] = useState(destinations[1]);

    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
    };

    return (
        <div className='planets_container'>
            <div className='crew_title'>
                <span className='crew_title_number'>01 </span>
                <h2> PICK YOUR DESTINATION</h2>
            </div>
            <div className='planets_wrapper'>
                <div className='planets_content'>
                    <nav>
                        <ul className='planets_navbar'>
                            {destinations.map((destination) => (
                                <li key={destination.name} onClick={() => handleDestinationClick(destination)} className={destination === selectedDestination ? 'active-link' : ''}>
                                    <button >{destination.name.toUpperCase()}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <h2>{selectedDestination.name.toUpperCase()}</h2>
                    <p>{selectedDestination.description}</p>
                    <div className='average_travel_distance'>
                        <div className='average_distance'>
                            <span>AVG. DISTANCE</span>
                            <h4>{selectedDestination.distance}</h4>
                        </div >
                        <div className='average_travel'>
                            <span>EST. TRAVEL TIME</span>
                            <h4>{selectedDestination.travel}</h4>
                        </div >
                    </div>
                </div>
                <div className='planet'>
                    <img src={selectedDestination.images.png} alt="planet" />
                </div>
            </div>
        </div>
    );
}

export default Planets;
