import React from 'react'
import { Link } from 'react-router-dom'

function StudentChoice() {
  return (
    <div className='choice'>
        <p> Select Option </p>
        <div className='div'>
            <Link to="/studentpanel"  style={{marginBottom: '10px'}}>View Results</Link> <br />
        </div>
        <div className="div">
            <Link to="/studentcomplaint">View Complaints</Link>
        </div>
  </div>
  )
}

export default StudentChoice