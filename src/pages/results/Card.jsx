import React from 'react'

function Card() {
  return (
    <div className='card'>
      
    <table>
    
      <thead>
        <tr>
          <th className='heading' colSpan={12}>First Semester Results</th>
        </tr>
        <tr>
          <td className='space'></td>
        </tr>
        <tr>
          <th colSpan={4}>Name: <span></span></th>
          <th colSpan={4}>Matricule: <span></span></th>
          <th colSpan={4}>Speciality: <span></span></th>
        </tr>
        <tr>
          <th>S/N</th>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Credit</th>
          <th>CA /30</th>
          <th>Exam /70</th>
          <th>Total</th>
          <th>AVG /20</th>
          <th>Evaluation</th>
          <th>Grade</th>
          <th>Grade Point</th>
          <th>Observation</th>
        </tr>
      </thead>
    
      <tr>
        <td>1</td>
        <td>French Language</td>
        <td>FRE04</td>
        <td>3</td>
        <td>26</td>
        <td>69</td>
        <td>95</td>
        <td>19</td>
        <td>Excellent</td>
        <td>A</td>
        <td>4.00</td>
        <td>Validated</td>
      </tr>
      <tr>
      <td>2</td>
        <td>French Language</td>
        <td>FRE04</td>
        <td>3</td>
        <td>26</td>
        <td>69</td>
        <td>95</td>
        <td>19</td>
        <td>Excellent</td>
        <td>A</td>
        <td>4.00</td>
        <td>Validated</td>
      </tr>
      <tr>
      <td>3</td>
        <td>French Language</td>
        <td>FRE04</td>
        <td>3</td>
        <td>26</td>
        <td>69</td>
        <td>95</td>
        <td>19</td>
        <td>Excellent</td>
        <td>A</td>
        <td>4.00</td>
        <td>Validated</td>
      </tr>
      <tr>
      <td>4</td>
        <td>French Language</td>
        <td>FRE04</td>
        <td>3</td>
        <td>26</td>
        <td>69</td>
        <td>95</td>
        <td>19</td>
        <td>Excellent</td>
        <td>A</td>
        <td>4.00</td>
        <td>Validated</td>
      </tr>
      <tr>
      <td>5</td>
        <td>French Language</td>
        <td>FRE04</td>
        <td>3</td>
        <td>26</td>
        <td>69</td>
        <td>95</td>
        <td>19</td>
        <td>Excellent</td>
        <td>A</td>
        <td>4.00</td>
        <td>Validated</td>
      </tr>
      <tr>
        <td></td>
        <td colSpan="2"></td>
        <td className='selected'>15</td>
        <td colSpan="5"></td>
        <td className='selected'>60</td>
        <td colSpan="2"></td>
      </tr>
      <tr>
        <th colSpan={3}>Total Credit</th>
        <th colSpan={6}>Total Grade Point</th>
        <th>GPA</th>
        <th colSpan={2}>Class of diploma</th>
      </tr>
      <tr>
        <td colSpan={3} className='selected'>15</td>
        <td colSpan={6} className='selected'>60</td>
        <td className='selected'>4</td>
        <td colSpan={2} className='selected'>Distinction</td>
      </tr>
    </table>

    <div className="click">
      <a href="" className='button-results'>Contest Results</a>
      <div className="click"> <button>Download Resutls</button></div>
    </div>
  </div>
  )
}

export default Card