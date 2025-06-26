import React from 'react'
import Logo from '../assets/Logo.png'
function Header() {
  return (

    <div className="head">
      <p style={{ color: 'hsl(240, 1.80%, 44.70%)', marginLeft: '220px', fontWeight: 'bold'}}>RESULT MANAGEMENT SYSTEM | ADMIN DASHBOARD</p>
      <div className='header'>
            <form className="search">
            <input type="text" placeholder="Search..." value=""/>
              <button className='button' type="submit">Search</button>
            </form>
      
      </div>
    </div>
  )
}

export default Header