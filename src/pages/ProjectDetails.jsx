import {useState, useContext, useLayoutEffect} from 'react'
import styles from '@css/ProjectDetails.module.css'
import MainLayout from '@layouts/MainLayout'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ChevronRight from '@icons/ChevronRight'
import EyeIcon from '@icons/EyeIcon'
import StarIcon from '@icons/StarIcon'
import ExportIcon from '@icons/ExportIcon'
import TrashIcon from '@icons/TrashIcon'
import ClockIcon from '@icons/ClockIcon'
import TranscriptIcon from '@icons/TranscriptIcon'
import ClapperboardIcon from '@icons/ClapperboardIcon'
import PlayButtonIcon from '@icons/PlayButtonIcon'
import SeasonsSection from '@components/SeasonsSection'
import FilmSection from '@components/FilmSection'
import ModalDeleteProject from '@components/ModalDeleteProject'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'
import { AppContext } from '../App'
import { fetchMovie } from '@services/server'

const ProjectDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {prevPage} = useContext(AppContext)
  const [project, setProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  // const project = filmCards.find(item => item.id == params.id)
  useLayoutEffect(() => {
    fetchMovie(params.id, setProject)
  },[])


  // if (project == undefined) {
  //   console.log('project is undefined')
  //   return (
  //     <MainLayout>
  //       <div className={styles.centered}>
  //         {/* <h1 className={styles.header}>Oops!</h1>
  //         <h2 className={styles.infoText}>Проект не найден. Возможно он был удален</h2>
  //         <div className={styles.actions}>
  //             <button 
  //                 className={styles.buttonSubmit}
  //                 onClick={()=>navigate('/projects')}
  //             >
  //                 Go Home
  //             </button>
  //         </div> */}
  //       </div>
  //     </MainLayout>
  //   )
  // }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const handleDeleteProject = () => {
    // const index = filmCards.findIndex(item => item.id == params.id)
    // filmCards.splice(index, 1)
    // navigate('/projects')
  }

  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else if (project==undefined) {
    return (
      <MainLayout>
        <div className={styles.centered}>
          {/* <h1 className={styles.header}>Oops!</h1>
          <h2 className={styles.infoText}>Проект не найден. Возможно он был удален</h2>
          <div className={styles.actions}>
              <button 
                  className={styles.buttonSubmit}
                  onClick={()=>navigate('/projects')}
              >
                  Go Home
              </button>
          </div> */}
        </div>
      </MainLayout>
    )
  } else return (
    <MainLayout>
      <section className={styles.section}>
        <div className={styles.main}>
          <div className={styles.pagePath}>
            {
              (prevPage=='/main-projects') 
              ? <Link to={'/main-projects'}>Проекты на главной</Link> 
              : <Link to={'/projects'}>Проекты</Link>
            }
            
            <ChevronRight width={16} height={16} />
            <p>{project.title}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.headerActionBox}>
              <div className={styles.headerBox}>
                <h1>{project.title}</h1>
                <div className={styles.stats}>
                  <div className={styles.group}>
                    <EyeIcon width={16} height={16} />
                    <p>{project.views}</p>
                  </div>
                  <div className={styles.group}>
                    <StarIcon width={16} height={16} />
                    <p>{project.isFavorite?'7':'0'}</p>
                  </div>
                  <div className={styles.group}>
                    <ExportIcon width={16} height={16} />
                    <p>{project.duration}</p>
                  </div>
                </div>
              </div>
              <div className={styles.ActionBox}>
                <button onClick={()=>navigate(`/edit-project/${params.id}`)}>Редактировать</button>
                <div className={styles.deleteBox} onClick={openModal}>
                  <TrashIcon width={20} height={20} viewBox={'0 0 16 16'}/>
                </div>
              </div>
            </div>
            <div className={styles.frameBox} >
              <div className={styles.playButtonPlaceholder}>
                <PlayButtonIcon width={30} height={36} />
              </div>
              <iframe src="/"></iframe>
            </div>
            {(project.seasons)
              ?  <SeasonsSection project={project} />
              :  <FilmSection project={project} />
            }
          </div>
        </div> 
        <div className={styles.aside}>
          <div className={styles.year}>
            <ClockIcon width={16} height={16} />
            <p>{project.releaseYear}</p>
          </div>
          <div className={styles.category}>
            <TranscriptIcon width={16} height={16} />
            <p>{project.categories.map(category=>category.name).join(', ')}</p>
          </div>
          <div className={styles.seasonInfo}>
            <ClapperboardIcon width={16} height={16} />
            <p>{project.seasons ?
              `${project.seasons.length} сезонов, ${project.seasons[project.seasons.length - 1].series.length} серий, ${project.duration} мин`
              : `${project.duration} мин`
            }</p>
          </div>
          <div className={styles.bgImage} style={{backgroundImage: `url(/src/assets/${project.imageSrc})`}}></div>
          <div className={styles.grayLine}></div>

          <div className={styles.addedInfo}>
            <p>
              <span className={styles.grayText}>Добавил:</span>
              <span className={styles.normalText}>{project.createdBy}</span>
            </p>
            <p>
              <span className={styles.grayText}>Дата добавления:</span>
              <span className={styles.normalText}>{project.createdAt}</span>
            </p>
            <p>
              <span className={styles.grayText}>Дата обновления:</span>
              <span className={styles.normalText}>{project.updatedAt}</span>
            </p>
          </div>
          
        </div> 

        <ModalDeleteProject title={'Удалить проект?'} isOpen={isModalOpen} onClose={closeModal} confirmDeleteProject={handleDeleteProject}/>

      </section>
    </MainLayout>
  )

  
}

export default ProjectDetails