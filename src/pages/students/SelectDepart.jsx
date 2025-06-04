import React from 'react'
import Item from '../../components/Item'

function SelectDepart() {
  return (
    <div>
        <h3 style={{ Color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)'}}><em>Select Department to View or Add Students</em></h3>

        {data.map(data=>(
            <Item text={data.text}/>
        ))}

    </div>
  )
}

export default SelectDepart