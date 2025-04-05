import React , {useState, useContext} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '@css/FilmCardMain.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import EllipseIcon from '@icons/EllipseIcon'
import ModalDeleteProject2 from '@components/ModalDeleteProject2'
import { filmCards } from '@services/filmCardBase'
import { AppContext } from '../App'

const FilmCardMain = ({placeCount, id, title, type, category, imageSrc}) => {
    const location = useLocation()
    const navigate = useNavigate();

    const {setPrevPage} = useContext(AppContext)

    const [isModalOpen2, setIsModalOpen2] = useState(false);
  
    const openModal2 = (e) => {
        e.preventDefault()
        setIsModalOpen2(true)
        console.log('openModal2')
    }
    const closeModal2 = (e) => {
        e.preventDefault();
        setIsModalOpen2(false);
    }
  
    const handleDeleteProject = (e) => {
        e.preventDefault()
        const index = filmCards.findIndex(item => item.id == id)
        filmCards.splice(index, 1)
        console.log(filmCards.length)
        closeModal2(e)
        navigate('/main-projects')
        setPrevPage(location.pathname)
        console.log(location.pathname)
    }

    const handleEditProject = (e) => {
        e.preventDefault()
        navigate(`/edit-project/${id}`)
        setPrevPage(location.pathname)
        console.log(location.pathname)
    }

    const handleViewProject = (e) => {
        e.preventDefault()
        navigate(`/details/${id}`)
        setPrevPage(location.pathname)
        console.log(location.pathname)
    }

  return (
    <div className={styles.card}>
        <div 
            className={styles.imageBox} 
            style={{backgroundImage: imageSrc}} 
            onClick={(e)=>handleViewProject(e)}
        >
        </div>
        <p className={styles.title} onClick={(e)=>handleViewProject(e)}>{title}</p>
        <p className={styles.category}>{category} <EllipseIcon /> {type}</p>
        <div className={styles.actionBox}>
            <div className={styles.placeCount}>
                <p>Проект на главной #{placeCount}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={e => handleEditProject(e)}>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} scalePath={0.85}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 
            title={'Удалить проект из главной?'} 
            question={'Вы действительно хотите удалить из главной?'}
            isOpen={isModalOpen2} 
            onClose={closeModal2} 
            confirmDeleteProject={handleDeleteProject}
        />
    </div>
  )
}

export default FilmCardMain