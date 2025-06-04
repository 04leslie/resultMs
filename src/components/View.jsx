import React from 'react'

function Sidebar() {
  return (
    <div className='body'>
        {/* <div className='sidebar'>
            <p>Name:<span> TUEDEM WAFO FREDERIQUE LESLIE</span></p>
            <p>Matricule: <span>SWE24UB010</span></p>
            <p>Gender: <span>Female</span></p>
            <p>DOB: <span>25-09-2004</span></p>
            <p>Department: <span>SWE</span></p>
            <p>Session: <span id='session'>2023/2024</span></p>
            <p>Semester: <span>Semester 1</span></p>
        </div> */}
        <div className="form">
        <p className='p'>Select the session and semester</p>

        <form action="" method="post">
          <label for="">Session:</label><br/>
          <input class="input" name="email" type="text" placeholder=" e.g. 2022/2023" /><br/>
          <label for="">Semester:</label><br/>
          <input class="input" name="password" type="password" /><br/>

          <a href="" className='button'>View Results</a>
        </form>
          
        </div>
    </div>
  )
}

export default Sidebar