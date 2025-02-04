import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
