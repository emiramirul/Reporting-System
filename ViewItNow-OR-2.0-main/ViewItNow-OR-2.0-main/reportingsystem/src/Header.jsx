import React, { useState } from 'react';
import { BsFillBellFill, BsPersonCircle, BsFillGearFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  const [activePage, setActivePage] = useState('design');

  return (
    <header className="header">
      <div className="header-left">
        <Link 
          to="/home"
          className={activePage === 'home' ? 'header-link active' : 'header-link'}
          onClick={() => setActivePage('home')}
        >
          Design
        </Link>
        <Link 
          to="/browse"
          className={activePage === 'browse' ? 'header-link active' : 'header-link'}
          onClick={() => setActivePage('browse')}
        >
          Browse
        </Link>
        <Link 
          to="/administration"
          className={activePage === 'administration' ? 'header-link active' : 'header-link'}
          onClick={() => setActivePage('administration')}
        >
          Administration
        </Link>
      </div>
      <div className="header-middle">
        <div className="batch-status-header">
          <span className="batch-status-text">Batch Status</span>
          <span className="batch-status-date">20240926</span>
        </div>
        <div className="batch-status-bar">
          <div className="progress" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" title="Notification"/>
        <BsPersonCircle className="icon" title="Profile"/>
        <BsFillGearFill className="icon" title="Setting"/>
        <FiLogOut className="icon" title="Log Out"/>
      </div>
    </header>
  );
}

export default Header;
