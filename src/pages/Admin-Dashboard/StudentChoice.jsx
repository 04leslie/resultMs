import React from 'react'
import { Link } from 'react-router-dom'
import RedLight from '../../assets/RedLight.jpg'
import Logo from '../../assets/Logo.png'

function StudentChoice() {
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
      <div className='choice'>
          <p> Select Option </p>
          <div className='div'>
              <Link to="/studentpanel"  style={{marginBottom: '10px'}}>View Results</Link> <br />
          </div>
          <div className="div">
              <Link to="/studentcomplaint">View Complaints</Link>
          </div>
        </div>
    </div>
  )
}

export default StudentChoice