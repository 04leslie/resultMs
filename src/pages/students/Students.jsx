import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

function Students() {

  // const [modal, setModal ] = useState(false);
  return (
    <Layout>
       <h3 style={{ Color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)'}}><em>Select Level to View or Add Students</em></h3>
        <div className='admin'>
            <Link to="/selectfaulty" className="box" style={{ backgroundColor: 'rgb(8, 195, 195)', border: '1px solid rgb(8, 195, 195)'}}>
                <p>Level 1</p>
            </Link>
            <Link to="/selectfaulty" className="box" style={{ backgroundColor: 'rgb(211, 43, 43)', border: 'rgb(211, 43, 43)'}}>
                <p>Level 2</p>
            </Link>
            <Link to="/selectfaulty" className="box" style={{ backgroundColor: 'rgb(169, 66, 169)', border: '1px solid rgb(169, 66, 169)'}}>
                <p>Level 3</p>
            </Link>
            <Link to="/selectfaulty" className="box" style={{ backgroundColor: 'hsl(231, 11%, 63%)', border: '1px solid hsl(231, 11%, 63%)'}}>
                <p>Level 4</p>
            </Link>
            <Link to="/selectfaulty" className="box" style={{ backgroundColor: 'hsl(29, 87.80%, 61.40%)', border: '1px solid hsl(29, 87.80%, 61.40%)'}}>
                <p>Level 5</p>
            </Link>
        </div>

          {/* <div className={modal?'modal':'none'}>
            
            <table>
              <tr>
                <th>S/N</th>
                <th>Matricule</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>

          </div> */}
    </Layout>
  )
}

export default Students