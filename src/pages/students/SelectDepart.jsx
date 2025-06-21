import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/layout/Layout'
import Item from '../../components/Item';

const SelectDepart = () => {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const schoolId = localStorage.getItem('selectedSchool');
        const levelId = localStorage.getItem('selectedLevel');


        // Fetch departments based on faculty and level
        const fetchDepartments = async () => {
            try {
            const response = await axios.get(`http://localhost:5000/api/departments?schoolId=${schoolId}&levelId=${levelId}`);
            setDepartments(response.data);
            setLoading(false);
            } catch (err) {
            setError('Failed to load departments');
            setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

    // Function to handle department selection
    const handleSelect = (departmentId) => {
        localStorage.setItem('departmentId', departmentId); // Store selected department ID
       navigate('/addstudent'); // Navigate to the add student page
    };

    return (
        <Layout>
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
        </Layout>
    );
};

export default SelectDepart;