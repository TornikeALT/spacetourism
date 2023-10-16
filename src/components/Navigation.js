import logo from '../images/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import hamburger from '../images/shared/icon-hamburger.svg'
import Modal from './Modal';
import { useState } from 'react';

function Navigation({ backGroundColor }) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <header>
            <img src={logo} alt="homepage logo" />
            <span className='seperator_line'></span>
            <div className='navigation' style={{ backgroundColor: backGroundColor }}>
                <nav id='navbar'>
                    <ul >
                        <li>
                            <NavLink to='/'><span>00 </span> HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='/destination'><span>01 </span>DESTINATION</NavLink>
                        </li>
                        <li>
                            <NavLink to='/crew'> <span>02 </span> CREW</NavLink>

                        </li>
                        <li>
                            <NavLink to='/technology'><span>03 </span> TECHNOLOGY</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src={hamburger} alt="hamburger" className='hamburger' onClick={openModal} />
            <Modal isOpen={isModalOpen} isClose={closeModal} />
        </header >
    );
}

export default Navigation;