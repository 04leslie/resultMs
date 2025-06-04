import React from 'react'
import Layout from '../../components/layout/Layout'
import Box from '../../components/Box'

const data=[
    {}
]

function SelectFaculty() {
  return (
    <Layout>
        <h3 style={{ Color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)'}}><em>Select Faculty to View or Add Students</em></h3>
        
        <div className="admin">
            {data.map(data=>(
                <Box text={data.text}/>
            ))}
        </div>

    </Layout> 
  )
}

export default SelectFaculty