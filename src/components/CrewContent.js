import { useState } from 'react';
import data from '../data.json'
import '../index.css'


function CrewContent() {
    const { crew } = data;
    const [crewMember, setCrewMember] = useState(crew[3]);
    const [activeIndex, setActiveIndex] = useState(3);
    const bulletsToShow = 4;// how many bullets state

    const handleActiveCrewMember = (index) => {
        setCrewMember(crew[index])
        setActiveIndex(index);
    }

    return (
        <div>
            <div className='crew_title'>
                <span className='crew_title_number'>02 </span>
                <h2> MEET YOUR CREW</h2>
            </div>
            <div className="crew_wrapper">
                <div className='crew_content'>
                    <div className='crew_member'>
                        <span >{crewMember.role.toUpperCase()}</span>
                        <h2>{crewMember.name.toUpperCase()}</h2>
                        <p>{crewMember.bio}</p>
                    </div>
                    <div className='bullets'>
                        {crew.slice(0, bulletsToShow).map((_, index) => (     //controll how Many Bullets to show
                            <div
                                key={index}
                                className={`bullet ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleActiveCrewMember(index)}
                            />
                        ))}
                    </div>

                </div>
                <div>
                    <img src={crewMember.images.png} alt="crew member portrait" className='crew_member_img' />
                </div>
            </div>
        </div>
    );
}

export default CrewContent;