import React from 'react'
import { Link } from 'react-router-dom'

function Choice() {
  return (
    <div className='choice'>
        <p>Are you ... </p>
        <div className='div'>
            <Link to="/login"  style={{marginBottom: '10px'}}>A Student</Link> <br />
        </div>
        <div className="div">
            <Link to="/loginAdmin">An Administrator</Link>
        </div>
    </div>
  )
}

export default Choice