import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersGear } from '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'


function SelectSchool() {
    const navigate = useNavigate(); 

    
    const handleSchoolSelect = (schoolId) => {
        // Store the selected level in local storage
        localStorage.setItem('selectedSchool', schoolId); 
        console.log('selectedSchool:', schoolId);
        navigate('/selectdepart');
    };

  return (
    <Layout>
            <h3 style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select School to View or Add Students</em>
            </h3>
            <div className='admin'>
                <Link
                    to=""
                    className="box"
                    onClick={() => handleSchoolSelect('1')} 
                >
                    <FontAwesomeIcon icon={faUsersGear} size="3x" className='icon'/>
                    <p>School of Engineering</p>
                </Link>
                <Link
                    to=""
                    className="box"
                    onClick={() => handleSchoolSelect('2')} 
                >
                    <FontAwesomeIcon icon={faStethoscope} size="3x" className='icon'/>
                    <p>School of Health</p>
                </Link>
                <Link
                    to=""
                    className="box"
                    onClick={() => handleSchoolSelect('3')} 
                >
                    <FontAwesomeIcon icon={faBriefcase} size="3x" className='icon'/>
                    <p>School of Management</p>
                </Link>
                <Link
                    to=""
                    className="box"
                    onClick={() => handleSchoolSelect('4')} 
                >
                    <FontAwesomeIcon icon={faBookOpenReader} size="3x" className='icon'/>
                    <p>School of Education</p>
                </Link>
                
            </div>
        </Layout>
  )
}

export default SelectSchool