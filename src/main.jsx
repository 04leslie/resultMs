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
import SelectSchool from './pages/students/SelectSchool.jsx'
import SelectDepart from './pages/students/SelectDepart.jsx'
import AddStudent from './pages/students/AddStudent.jsx'
import Login from './pages/login/Login.jsx'
import LoginAdmin from './pages/login/LoginAdmin.jsx'
import Register from './pages/register/Register.jsx'
import Complaints from './pages/complaint/Complaints.jsx'
import Courses from './pages/courses/Courses.jsx'
const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/login', element:<Login />},
  {path:'/loginAdmin', element:<LoginAdmin />},
  {path:'/register', element:<Register />},
  {path:'/about', element:<Card />},
  {path:'/session', element:<Session />},
  {path:'/dashboard', element:<AdminDashboard />},
  {path:'/department', element:<Department />},
  {path:'/students', element:<Students />},
  {path:'/results', element:<Result />},
  {path:'/selectschool', element:<SelectSchool />},
  {path:'/selectdepart', element:<SelectDepart />},
  {path:'/addstudent', element:<AddStudent />},
  {path:'/complaints', element:<Complaints />},
  {path:'/courses', element:<Courses />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
