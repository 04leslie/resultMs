import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

function Result() {
  return (
        <Layout>
            <div className='admin'>
                        <Link to="" className="box" style={{ backgroundColor: 'rgb(8, 195, 195)', border: '1px solid rgb(8, 195, 195)'}}>
                            <p>Level 1</p>
                        </Link>
                        <Link to="" className="box" style={{ backgroundColor: 'rgb(211, 43, 43)', border: 'rgb(211, 43, 43)'}}>
                            <p>Level 2</p>
                        </Link>
                        <Link to="" className="box" style={{ backgroundColor: 'rgb(169, 66, 169)', border: '1px solid rgb(169, 66, 169)'}}>
                            <p>Level 3</p>
                        </Link>
                        <Link to="" className="box" style={{ backgroundColor: 'hsl(231, 11%, 63%)', border: '1px solid hsl(231, 11%, 63%)'}}>
                            <p>Level 4</p>
                        </Link>
                        <Link to="" className="box" style={{ backgroundColor: 'hsl(211, 83.80%, 80.60%)', border: '1px solid hsl(231, 11%, 63%)'}}>
                            <p>Level 5</p>
                        </Link>
                    </div>
        </Layout>
  )
}

export default Result