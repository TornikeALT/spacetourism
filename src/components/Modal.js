import '../index.css'
import closebutton from '../images/shared/icon-close.svg'
import { Link } from 'react-router-dom';

function Modal({ isOpen, isClose }) {
    return (
        isOpen &&
        <div className="modal">
            <div className="modal-content">
                <nav >
                    <ul>
                        <li>
                            <Link to='/' onClick={isClose}>HOME</Link>
                        </li>
                        <li>
                            <Link to='/destination' onClick={isClose}>DESTINATION</Link>
                        </li>
                        <li>
                            <Link to='/crew' onClick={isClose}>CREW</Link>

                        </li>
                        <li>
                            <Link to='/technology' onClick={isClose}>TECHNOLOGY</Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <img src={closebutton} alt="close" onClick={isClose} className='close_image' />
        </div>
    );
}

export default Modal;