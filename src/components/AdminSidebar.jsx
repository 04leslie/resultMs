import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/Logo.png'

function AdminSidebar() {
  const location = useLocation();

  return (
    <div>
      
        <div className='sidebar-admin'>
            <div className="first">
              <img src={Logo} alt="logo" />
            </div>
            
          <Link className={`section ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">
            <FontAwesomeIcon icon={faHouse} className='icon'/> Dashboard
          </Link>

               <Link className={`section ${location.pathname === "/session" ? "active" : ""}`} to="/session">
                <FontAwesomeIcon icon={faCalendar} className='icon'/>  Sessions
              </Link>

              <Link className={`section ${location.pathname === "/department" ? "active" : ""}`} to="/department">
                <FontAwesomeIcon icon={faSchool} className='icon'/> Departments
              </Link>

              <Link className={`section ${location.pathname === "/students" ? "active" : ""}`} to="/students">
                <FontAwesomeIcon icon={faUserGraduate} className='icon'/> Students
              </Link>
  
              <Link className={`section ${location.pathname === "/courses" ? "active" : ""}`} to="/courses">
                <FontAwesomeIcon icon={faBook} className='icon'/> Courses
              </Link>

              <Link className={`section ${location.pathname === "/results" ? "active" : ""}`} to="/results">
              <FontAwesomeIcon icon={faFile} className='icon'/> Results
              </Link>
              <Link className={`section ${location.pathname === "/complaints" ? "active" : ""}`} to="/complaints">
              <FontAwesomeIcon icon={faMessage} className='icon'/> Complaints
              </Link>
              <Link className={`section ${location.pathname === "/complaints" ? "active" : ""}`} to="/complaints">
              <FontAwesomeIcon  className='icon'/>
              </Link>
        </div>
    </div>
  )
}

export default AdminSidebar