import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout'
import Box from '../../components/Box'

function SelectSchool() {
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Function to handle level selection and navigation
    const handleSchoolSelect = (schoolId) => {
        // Store the selected level in local storage
        localStorage.setItem('selectedSchool', schoolId); 
        navigate('/selectdepart'); // Navigate to the next step
    };

  return (
    <Layout>
            <h3 style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select School to View or Add Students</em>
            </h3>
            <div className='admin'>
                <Link
                    to="/selectdepart"
                    className="box"
                    onClick={() => handleSchoolSelect('1')} // Store Level 1
                >
                    <p>School of Engineering</p>
                </Link>
                <Link
                    to="/selectdepart"
                    className="box"
                    onClick={() => handleSchoolSelect('2')} // Store Level 2
                >
                    <p>School of Health</p>
                </Link>
                <Link
                    to="/selectdepart"
                    className="box"
                    onClick={() => handleSchoolSelect('3')} // Store Level 3
                >
                    <p>School of Management</p>
                </Link>
                <Link
                    to="/selectdepart"
                    className="box"
                    onClick={() => handleSchoolSelect('4')} // Store Level 4
                >
                    <p>School of Education</p>
                </Link>
                
            </div>
        </Layout>
  )
}

export default SelectSchool