import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

function Students() {
    const navigate = useNavigate();
 // Hook to programmatically navigate

    // Function to handle level selection and navigation
    const handleLevelSelect = (levelId) => {
        // Store the selected level in local storage
        localStorage.setItem('selectedLevel', levelId); 
        navigate('/selectschool'); // Navigate to the next step
    };

    return (
        <Layout>
            <p style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select Level to View or Add Students</em>
            </p>
            <div className='admin'>
                <Link
                    to="/selectschool"
                    className="box"
                    style={{ backgroundColor: 'hsl(190, 65%, 60%)', border: '1px solid hsl(190, 65%, 60%)' }}
                    onClick={() => handleLevelSelect('1')} // Store Level 1
                >
                    <p>Level 1</p>
                </Link>
                <Link
                    to="/selectschool"
                    className="box"
                    style={{ backgroundColor: 'hsl(355, 60%, 60%)', border: 'hsl(355, 60%, 60%)' }}
                    onClick={() => handleLevelSelect('2')} // Store Level 2
                >
                    <p>Level 2</p>
                </Link>
                <Link
                    to="/selectschool"
                    className="box"
                    style={{ backgroundColor: 'hsl(260, 50%, 65%)', border: '1px solid hsl(260, 50%, 65%)' }}
                    onClick={() => handleLevelSelect('3')} // Store Level 3
                >
                    <p>Level 3</p>
                </Link>
                <Link
                    to="/selectschool"
                    className="box"
                    style={{ backgroundColor: 'hsl(220, 15%, 65%)', border: '1px solid hsl(220, 15%, 65%)' }}
                    onClick={() => handleLevelSelect('4')} // Store Level 4
                >
                    <p>Level 4</p>
                </Link>
                <Link
                    to="/selectschool"
                    className="box"
                    style={{ backgroundColor: 'hsl(30, 80%, 70%)', border: '1px solid hsl(30, 80%, 70%)' }}
                    onClick={() => handleLevelSelect('5')} // Store Level 5
                >
                    <p>Level 5</p>
                </Link>
            </div>
        </Layout>
    );
}

export default Students;