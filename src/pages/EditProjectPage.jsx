import styles from '../assets/css/EditProjectPage.module.css'
import React, {useState, useContext, createContext} from 'react'
import { useParams, Link, NavLink, useNavigate, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { isAdminLoggedIn } from '../sevices/isAdminLoggedIn'
import NoAdminLoggedIn from '../components/NoAdminLoggedIn'
import { filmCards } from '../sevices/filmCardBase'
import ChevronRight from '../components/icons/ChevronRight'
import BackArrowIcon from '../components/icons/BackArrowIcon'
import MainInfoTab from '../components/MainInfoTab'
import VideosTab from '../components/VideosTab'
import ThumbnailScreenshotsTab from '../components/ThumbnailScreenshotsTab'


export const EditContext = createContext()

const EditProjectPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [submitButtonClass, setSubmitButtonClass] = useState(false)
    const [editedProject, setEditedProject] = useState(filmCards.find(item => item.id == params.id))

    const handleSubmitForm = (e) => {
      e.preventDefault()
      // here we can send new project's data to server
      setNewProject({...newProject, ...data, seasons: []})
      if(submitButtonClass){
        navigate('/add-project-2')
      }
    }

    
    if (!isAdminLoggedIn()) {
      return <NoAdminLoggedIn />
    } else return (
      <EditContext.Provider value={{editedProject, setEditedProject}}>
        <MainLayout>
        <div className={styles.whiteBG}>
          <div className={styles.container}>

            <div className={styles.pagePath}>
              <Link to={'/projects'}>Проекты</Link>
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
                <NavLink to={`/edit-project/${editedProject.id}/main-info`}>Основная информация</NavLink>
                <NavLink to={`/edit-project/${editedProject.id}/video`}>Видео</NavLink>
                <NavLink to={`/edit-project/${editedProject.id}/thumbnail-screenshots`}>Обложка и скриншоты</NavLink>
              </nav>

              <Routes>
                <Route path='main-info' element={<MainInfoTab />}/>
                <Route path='video' element={<VideosTab />}/>
                <Route path='thumbnail-screenshots' element={<ThumbnailScreenshotsTab />}/>
              </Routes>

              <div className={styles.actionButtons}>
                <button type='submit' className={submitButtonClass?styles.activated:styles.disabled}>Сохранить</button>
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