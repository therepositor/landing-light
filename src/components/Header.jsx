import React from 'react';
import { Link } from 'react-router-dom';
import image from './Group1.png';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li className="nav-item">
                <Link className='nav-link' to='/trips'>Trips</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/recently-viewed'>Recently viewed</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/bookings'>Bookings</Link>
            </li>
        </ul>
        <div className="user-profile-container">
            <img src={image} alt="user" />
        </div>
      </nav>
  </header>
  );
};

export default Header;
