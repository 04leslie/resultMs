import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/Logo.png'

function AdminSidebar() {
  return (
    <div>
      
        <div className='sidebar-admin'>
            <div className="first">
              <img src={Logo} alt="" />
            </div>
            
          <Link className="section-d" to="/dashboard">
            <FontAwesomeIcon icon={faHouse} className='icon'/> Dashboard
          </Link>

               <Link className="section" to="/session">
                <FontAwesomeIcon icon={faCalendar} className='icon'/>  Sessions
              </Link>

              <Link className="section" to="/department">
                <FontAwesomeIcon icon={faSchool} className='icon'/> Departments
              </Link>

              <Link className="section" to="/students">
                <FontAwesomeIcon icon={faUserGraduate} className='icon'/> Students
              </Link>
  
              <Link className="section" to="/results">
                <FontAwesomeIcon icon={faBook} className='icon'/> Courses
              </Link>

              <Link className="section">
              <FontAwesomeIcon icon={faFile} className='icon'/> Results
              </Link>
        </div>
    </div>
  )
}

export default AdminSidebar