import styles from '@css/EditProjectPage.module.css'
import React, {useState, createContext, useContext} from 'react'
import { useParams, Link, NavLink, useNavigate, Routes, Route, useMatch } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'
import { filmCards } from '@services/filmCardBase'
import ChevronRight from '@icons/ChevronRight'
import BackArrowIcon from '@icons/BackArrowIcon'
import MainInfoTab from '@components/MainInfoTab'
import VideosTab from '@components/VideosTab'
import ThumbnailScreenshotsTab from '@components/ThumbnailScreenshotsTab'
import { AppContext } from '../App'


export const EditContext = createContext()

const EditProjectPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [editedProject, setEditedProject] = useState(filmCards.find(item => item.id == params.id))
    const [allFilled, setAllFilled] = useState(true)
    const {prevPage} = useContext(AppContext)

    const handleSubmitForm = (e) => {
      e.preventDefault()
      if(allFilled==false) {
        alert('не все поля заполнены')
      }
      // here we can send edited project's data to server
      
        // navigate('/add-project-2')
      
    }

    
    if (!isAdminLoggedIn()) {
      return <NoAdminLoggedIn />
    } else return (
      <EditContext.Provider value={{editedProject, setEditedProject, allFilled, setAllFilled}}>
        <MainLayout>
        <div className={styles.whiteBG}>
          <div className={styles.container}>

            <div className={styles.pagePath}>
              {
                (prevPage=='/main-projects') 
                ? <Link to={'/main-projects'}>Проекты на главной</Link> 
                : <Link to={'/projects'}>Проекты</Link>
              }
              <ChevronRight width={16} height={16} />
              <p>Редактировать проект</p>
            </div>

            <form className={styles.formContainer} onSubmit={(e)=>handleSubmitForm(e)}>

              <div className={styles.formHeader}>
                <button 
                  className={styles.backButton}
                  onClick={()=>navigate('/projects')}
                >
                  <BackArrowIcon width={20} height={20}/>
                </button>
                <h1>Редактировать "{editedProject.title}"</h1>
              </div>

              <nav className={styles.navTabs}>
                <NavLink 
                  to={`/edit-project/${editedProject.id}/`}
                  className={({ isActive }) => (useMatch(`/edit-project/${editedProject.id}/`) ? styles.active : styles.secondary)}
                >
                  Основная информация
                </NavLink>
                <NavLink 
                  to={`/edit-project/${editedProject.id}/video`}
                  className={({ isActive }) => (isActive ? styles.active : styles.secondary)}
                >
                  Видео
                </NavLink>
                <NavLink 
                  to={`/edit-project/${editedProject.id}/thumbnail-screenshots`}
                  className={({ isActive }) => (isActive ? styles.active : styles.secondary)}
                >
                  Обложка и скриншоты
                </NavLink>
              </nav>

              <Routes>
                <Route path='/' element={<MainInfoTab />}/>
                <Route path='video' element={<VideosTab />}/>
                <Route path='thumbnail-screenshots' element={<ThumbnailScreenshotsTab />}/>
              </Routes>

              <div className={styles.actionButtons}>
                <button type='submit' className={styles.activated}>Сохранить</button>
                <button className={styles.cancelButton} onClick={()=>navigate('/projects')}>Отмена</button>
              </div>

            </form>

          </div>
        </div>
        </MainLayout>
      </EditContext.Provider>
    )
}

export default EditProjectPage