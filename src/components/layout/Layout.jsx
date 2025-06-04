 import React from 'react'
import AdminSidebar from '../AdminSidebar'
import Header from '../Header'
 
 function Layout({children}) {
   return (
     <div className='container'>
            <Header />
        <div className="row">
            <AdminSidebar />
        </div>
        <div className="content">
        {children}
        </div>
     </div>
   )
 }
 
 export default Layout