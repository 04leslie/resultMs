import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import RedLight from '../../assets/RedLight.jpg'
import Logo from '../../assets/Logo.png'

function Choice() {
  return (
    <div>
      <div className="top-bar">
        <img src={Logo} alt="logo" />
        <p style={{fontWeight: 'bold', fontSize:'18px'}}>HITBAMAS RESULT MANAGEMENT SYSTEM</p>
      </div>

      <div className="banner">
          <img src={RedLight} alt="Banner" className="banner-image" />
          <div className="overlay"></div>
      </div>
      <div className='choices'>
          <div className='div'>
            <FontAwesomeIcon icon={faUsers} size="5x" className='icon'/>
          <Link to="/studentchoice"  style={{marginBottom: '10px'}}>Student Login</Link> <br />
        </div>
        <div className="div">
          <FontAwesomeIcon icon={faUserTie} size="5x" className='icon'/>
          <Link to="/loginAdmin">Administrator Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Choice