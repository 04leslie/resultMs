import React from 'react'
import { Link } from 'react-router-dom'

function Box({text}) {
  return (
    <div >
        <Link to="/selectdepart" className="box" style={{ backgroundColor: 'rgb(8, 195, 195)', border: '1px solid rgb(8, 195, 195)'}}>
                <p>{text}</p>
        </Link>
    </div>
  )
}

export default Box