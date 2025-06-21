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
            <Link to="/department" className="box" style={{ backgroundColor: 'rgb(8, 195, 195)', border: '1px solid rgb(8, 195, 195)'}}>
                <FontAwesomeIcon icon={faSchool} size="2x" className='icon-d'/>
                <p>Departments</p>
            </Link>
            <Link to="/students" className="box" style={{ backgroundColor: 'rgb(211, 43, 43)', border: 'rgb(211, 43, 43)'}}>
                <FontAwesomeIcon icon={faUserGraduate} size="2x" className='icon-d'/>
                <p>Students</p>
            </Link>
            <Link to="/courses" className="box" style={{ backgroundColor: 'rgb(169, 66, 169)', border: '1px solid rgb(169, 66, 169)'}}>
                <FontAwesomeIcon icon={faBook} size="2x" className='icon-d'/>
                <p>Courses</p>
            </Link>
            <Link to="/results" className="box" style={{ backgroundColor: 'hsl(231, 11%, 63%)', border: '1px solid hsl(231, 11%, 63%)'}}>
                <FontAwesomeIcon icon={faFile} size="2x" className='icon-d'/>
                <p>Results</p>
            </Link>
            <Link to="/results" className="box" style={{ backgroundColor: 'hsl(29, 87.80%, 61.40%)', border: '1px solid hsl(29, 87.80%, 61.40%)'}}>
                <FontAwesomeIcon icon={faMessage} size="2x" className='icon-d'/>
                <p>Complaints</p>
            </Link>
        </div>
    </Layout>
  )
}

export default AdminDashboard