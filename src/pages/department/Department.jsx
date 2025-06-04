import React from 'react'
import Layout from '../../components/layout/Layout'

function Department() {
  return (
    <Layout>
        <div className='form create'>
               <h2>Add a New Department</h2>
              <form action="" method="post">
                  <label for="">Name:</label><br/>
                  <input class="input" name="name" type="text"/><br/>
                  <label for="">Code:</label><br/>
                  <input class="input" name="name" type="text" placeholder='e.g SWE'/><br/>
                  <label for="">Faculty:</label><br/>
                  <select id="faculty" className='input'>
                      <option value="">-- Select Faculty --</option>
                      <option value="health">School of Health</option>
                      <option value="education">School of Education</option>
                      <option value="engineering">School of Engineering</option>
                      <option value="business">School of Business & Management Sciences</option>
                  </select>
                  <label for="">Level:</label><br/>
                  <select name="" id="" className='input'>
                    <option value="">-- Select Level --</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                  </select>
                  <input type="submit" name="submit" value="Add" class="button"/>
              </form>
              </div>
        
              <div className="session-table">
                <h2>Existing Departments</h2>
                <table className='session-table'>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Faculty</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Software Engineering</td>
                    <td>SWE</td>
                    <td>School of Engineering</td>
                    <td>2</td>
                    <td className='actions'>
                      <button type="submit" className='view-button'>view</button>
                      <button type="submit" className='delete-button'>Delete</button>
                    </td>
                    </tr>
                </table>
              </div>
    </Layout>
  )
}

export default Department