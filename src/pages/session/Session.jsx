import React from 'react'
import Layout from '../../components/layout/Layout'

function Session() {
  return (
    <Layout>
      
          <div className='form create'>
           <h2> Create a New Sesssion</h2>
          <form action="" method="post">
              <label for="">Name:</label><br/>
              <input class="input" name="email" type="text" placeholder=" e.g. 2022/2023"/><br/>
              <input type="submit" name="submit" value="Create" class="button"/>
          </form>
          </div>
      
          <div className="session-table">
            <h2>Existing Sessions</h2>
            <table className='session-table'>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                <td>1</td>
                <td>2020/2021</td>
                <td>Inactive</td>
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

export default Session