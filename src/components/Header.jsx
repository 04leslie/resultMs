import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div className="head">
      <p style={{ color: 'hsl(240, 1.80%, 44.70%)', marginLeft: '220px', fontWeight: 'bold'}}>RESULT MANAGEMENT SYSTEM | ADMIN DASHBOARD</p>
      
      <Link className={`account ${location.pathname === "/addAdmin" ? "active" : ""}`} to="/addAdmin" >
        <FontAwesomeIcon icon={faUser} className='icon'/> Account
      </Link>
    </div>
  )
}

export default Header