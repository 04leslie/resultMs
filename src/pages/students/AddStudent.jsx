import React from 'react'
 import React, { useState } from 'react';
import Layout from '../../components/layout/Layout'

const ItemTable = () => {
  const [items, setItems] = useState([
    { id: 1, name: '', qty: '', color: '' }
  ]);
};
  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleKeyPress = (e, index) => {
    // When Enter is pressed in the last field of the last row
    if (e.key === 'Enter' && index === items.length - 1) {
      e.preventDefault();
      addNewRow();
    }
  };

  const addNewRow = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: '', qty: '', color: '' }
    ]);
  };

function AddStudent() {
  return (
    <Layout>
    <div>
      <h2>Shop Items</h2>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => handleChange(index, 'qty', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.color}
                  onChange={(e) => handleChange(index, 'color', e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </Layout> 
  )
}
export default AddStudent