import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Card from './pages/results/Card.jsx'
import AdminDashboard from './pages/Admin-Dashboard/AdminDashboard.jsx'
import Session from './pages/session/session.jsx'
import Department from './pages/department/department.jsx'
import Students from './pages/students/Students.jsx'
import Result from './pages/results/result.jsx'
import SelectFaculty from './pages/students/SelectFaculty.jsx'
import SelectDepart from './pages/students/SelectDepart.jsx'
import AddStudent from './pages/students/AddStudent.jsx'
const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/about', element:<Card />},
  {path:'/about', element:<Card />},
  {path:'/session', element:<Session />},
  {path:'/dashboard', element:<AdminDashboard />},
  {path:'/department', element:<Department />},
  {path:'/students', element:<Students />},
  {path:'/results', element:<Result />},
  {path:'/selectfaculty', element:<SelectFaculty />},
  {path:'/selectdepart', element:<SelectDepart />},
  {path:'/addstudent', element:<AddStudent />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
