import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '@css/FilmCard.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import EyeIcon from '@icons/EyeIcon'
import ModalDeleteProject from '@components/ModalDeleteProject'

const FilmCard = ({id, title, category, views, seriesCount, imageSrc, deleteConfirmed}) => {

    const navigate = useNavigate();

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
        deleteConfirmed(id)
        closeModal2(e)
        navigate('/projects')
    }

    const handleEditProject = (e) => {
        e.preventDefault()
        navigate(`/edit-project/${id}`)
    }

    console.log('imageSrc', imageSrc)

  return (
    <div className={styles.card}>
        <div className={styles.imageBox} style={{backgroundImage: imageSrc}} onClick={()=>navigate(`/details/${id}`)}>
            { seriesCount? <p className={styles.seriesCount}>{seriesCount} бөлім</p> : '' }
        </div>
        <p className={styles.title} onClick={()=>navigate(`/details/${id}`)}>{title}</p>
        <p className={styles.category}>{category}</p>
        <div className={styles.actionBox}>
            <div className={styles.views}>
                <EyeIcon width={16} height={16} />
                <p>{views}</p>
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

        <ModalDeleteProject title={'Удалить проект?'} isOpen={isModalOpen2} onClose={closeModal2} confirmDeleteProject={handleDeleteProject}/>
    </div>
  )
}

export default FilmCard