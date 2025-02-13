import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import LoginPage from './pages/LoginPage'
import MainProjectsPage from './pages/MainProjectsPage'
import CategoriesPage from './pages/CategoriesPage'
import UsersPage from './pages/UsersPage'
import RolesPage from './pages/RolesPage'
import GenresPage from './pages/GenresPage'
import AgesPage from './pages/AgesPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='details/:id' element={<ProjectDetails />} />
          <Route path='main-projects' element={<MainProjectsPage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='roles' element={<RolesPage />} />
          <Route path='genres' element={<GenresPage />} />
          <Route path='ages' element={<AgesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
