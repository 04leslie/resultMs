import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <Layout>
        <p style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select to Carry Out Operation</em>
            </p>
        <div className='admin'>
            <Link to="/department" className="box" style={{ backgroundColor: 'hsl(190, 65%, 60%)', border: '1px solid hsl(190, 65%, 60%)'}}>
                <FontAwesomeIcon icon={faSchool} size="2x" className='icon-d'/>
                <p>Departments</p>
            </Link>
            <Link to="/students" className="box" style={{ backgroundColor: 'hsl(355, 60%, 60%)', border: 'hsl(355, 60%, 60%)'}}>
                <FontAwesomeIcon icon={faUserGraduate} size="2x" className='icon-d'/>
                <p>Students</p>
            </Link>
            <Link to="/courses" className="box" style={{ backgroundColor: 'hsl(260, 50%, 65%)', border: '1px solid hsl(260, 50%, 65%)'}}>
                <FontAwesomeIcon icon={faBook} size="2x" className='icon-d'/>
                <p>Courses</p>
            </Link>
            <Link to="/results" className="box" style={{ backgroundColor: 'hsl(220, 15%, 65%)', border: '1px solid hsl(220, 15%, 65%)'}}>
                <FontAwesomeIcon icon={faFile} size="2x" className='icon-d'/>
                <p>Results</p>
            </Link>
            <Link to="/results" className="box" style={{ backgroundColor: 'hsl(30, 80%, 70%)', border: '1px solid hsl(30, 80%, 70%)'}}>
                <FontAwesomeIcon icon={faMessage} size="2x" className='icon-d'/>
                <p>Complaints</p>
            </Link>
        </div>
    </Layout>
  )
}

export default AdminDashboard