import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../../components/Item';
import Layout from '../../components/layout/Layout'



function ShowDepart() {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const levelId = localStorage.getItem('levelId');

        // Fetch departments based on faculty and level
        const fetchDepartments = async () => {
            const response = await axios.get(`http://your-laravel-app/api/departments?levelId=${levelId}`);
            setDepartments(response.data);
        };

        fetchDepartments();
    }, []);

    // Function to handle department selection
    const handleSelect = (departmentId) => {
        localStorage.setItem('departmentId', departmentId); // Store selected department ID
        // Navigate to the add student page or handle further logic
    };

    return (
        <div>
            <h3 style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select Department to View or Add Students</em>
            </h3>

            {departments.map(department => (
                <Item
                    key={department.id}
                    text={department.name} // Assuming department has a 'name' field
                    departmentId={department.id}
                    onSelect={handleSelect} // Pass down the select handler
                />
            ))}
        </div>
    );
}

export default ShowDepart