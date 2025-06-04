import React from 'react'
import { Link } from 'react-router-dom'

function Item({text}) {
  return (
    <div className='item'>
        <p>{text}</p>
        <Link to="/addstudent" className='delete-button'>Add</Link>
        <Link  className='view-button'>view</Link>
    </div>
  )
}

export default Item
