import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Card from './pages/results/Card.jsx'
import AdminDashboard from './pages/Admin-Dashboard/AdminDashboard.jsx'
import StudentPanel from './pages/Admin-Dashboard/StudentPanel.jsx'
import StudentChoice from './pages/Admin-Dashboard/StudentChoice.jsx'
import Session from './pages/session/session.jsx'
import Department from './pages/department/Department.jsx'
import Students from './pages/students/Students.jsx'
import Result from './pages/results/Result.jsx'
import ResultEntry from './pages/results/ResultEntry.jsx'
import SelectSchool from './pages/students/SelectSchool.jsx'
import SelectDepart from './pages/students/SelectDepart.jsx'
import AddStudent from './pages/students/AddStudent.jsx'
import Login from './pages/login/Login.jsx'
import LoginAdmin from './pages/login/LoginAdmin.jsx'
import Register from './pages/register/Register.jsx'
import Complaints from './pages/complaint/Complaints.jsx'
import StudentComplaint from './pages/complaint/StudentComplaint.jsx'
import ChatView from './pages/complaint/ChatView.jsx'
import Courses from './pages/courses/Courses.jsx'
import Selectsession from './pages/students/SelectSession.jsx'
const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/login', element:<Login />},
  {path:'/loginAdmin', element:<LoginAdmin />},
  {path:'/addAdmin', element:<Register />},
  {path:'/card', element:<Card />},
  {path:'/session', element:<Session />},
  {path:'/dashboard', element:<AdminDashboard />},
  {path:'/department', element:<Department />},
  {path:'/students', element:<Students />},
  {path:'/studentpanel', element:<StudentPanel />},
  {path:'/studentchoice', element:<StudentChoice />},
  {path:'/results', element:<Result />},
  {path:'/selectschool', element:<SelectSchool />},
  {path:'/selectdepart', element:<SelectDepart />},
  {path:'/selectsession', element:<Selectsession />},
  {path:'/addstudent', element:<AddStudent />},
  {path:'/complaints', element:<Complaints />},
  {path:'/studentcomplaint', element:<StudentComplaint />},
  {path:'/complaints/:id', element:<ChatView />},
  {path:'/courses', element:<Courses />},
  {path:'/resultEntry', element:<ResultEntry />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
