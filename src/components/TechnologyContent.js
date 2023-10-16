import '../index.css';
import data from '../data.json'
import { useState } from 'react';

function TechnologyContent() {
    const { technology } = data;
    const [currentTechnology, setCurrentTechnology] = useState(technology[0])
    const [activeIndex, setActiveIndex] = useState(0)

    const handleIndex = (index) => {
        setActiveIndex(index);
        setCurrentTechnology(technology[index])
    }

    return (
        <>
            <div className='crew_title'>
                <span className='crew_title_number'>03 </span>
                <h2> SPACE LAUNCH 101</h2>
            </div>
            <div className='technology_content'>
                <div className='number_bullets'>
                    {technology.map((_, i) => {
                        return <span key={i} onClick={() => handleIndex(i)} className={`number_bullet ${activeIndex === i ? 'active_bullet' : ''}`}>
                            {i + 1}
                        </span>
                    })}
                </div>
                <div className='vehicles'>
                    <span>TERMINLOGOY...</span>
                    <h2>{currentTechnology.name.toUpperCase()}</h2>
                    <p>{currentTechnology.description}</p>
                </div>
                <img src={currentTechnology.images.portrait} alt="portrait" className='vehicles_image' />
            </div>
        </>
    );
}

export default TechnologyContent;