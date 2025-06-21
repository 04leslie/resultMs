import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from './layout/Layout'

function Item({ text, departmentId, onSelect }) {
  const navigate = useNavigate();

    const handleAddClick = () => {
        onSelect(departmentId); // Call the onSelect function with the department ID
        navigate('/addstudents'); // Navigate to the AddStudents page
    };  
  return (
        
          <div className='item'>
              <p>{text}</p>
          
              <button className='add-button' onClick={() => onSelect(departmentId)}>Add</button>
          </div>
        
    );
}

export default Item;