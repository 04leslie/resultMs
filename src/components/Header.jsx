import React from 'react'
import Logo from '../assets/Logo.png'
function Header() {
  return (
    <div className='header'>
          <form className="search">
          <input type="text" placeholder="Search..." value=""/>
            <button type="submit">Search</button>
          </form>
          
    </div>
  )
}

export default Header