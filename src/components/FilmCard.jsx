import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../assets/css/FilmCard.module.css'
import EditIcon from './icons/EditIcon'
import TrashIcon from './icons/TrashIcon'
import EyeIcon from './icons/EyeIcon'
import ModalDeleteProject2 from './ModalDeleteProject2'
import { filmCards } from '../sevices/filmCardBase'

const FilmCard = ({id, title, category, views, seriesCount, imageSrc}) => {

    const navigate = useNavigate();

    const [isModalOpen2, setIsModalOpen2] = useState(false);
  
    const openModal2 = (e) => {
        e.preventDefault()
        setIsModalOpen2(true)
        console.log('openModal2')
    }
    const closeModal2 = () => setIsModalOpen2(false);
  
    const handleDeleteProject = () => {
      const index = filmCards.findIndex(item => item.id == id)
      filmCards.splice(index, 1)
      navigate('/projects')
    }

  return (
    <div className={styles.card}>
        <div className={styles.imageBox} style={{backgroundImage: imageSrc}}>
            { seriesCount? <p className={styles.seriesCount}>{seriesCount} бөлім</p> : '' }
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.category}>{category}</p>
        <div className={styles.actionBox}>
            <div className={styles.views}>
                <EyeIcon width={16} height={16} />
                <p>{views}</p>
            </div>
            <div className={styles.actions}>
                <button>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} viewBox={'0 0 16 16'}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 title={'Удалить проект?'} isOpen={isModalOpen2} onClose={closeModal2} confirmDeleteProject={handleDeleteProject}/>
    </div>
  )
}

export default FilmCard