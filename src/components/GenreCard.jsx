import React from 'react'
import {useState} from 'react'
import styles from '@css/GenreCard.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import VideoIcon from '@icons/VideoIcon'
import ModalDeleteProject2 from '@components/ModalDeleteProject2'

const GenreCard = ({title, imageSrc}) => {

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
  
    const handleDeleteGenre = (e) => {
        e.preventDefault();
        // add server request to delete category
        closeModal2(e)
    }

    const handleEditGenre = (e) => {
        e.preventDefault()
        
    }

  return (
    <div className={styles.card}>
        <img className={styles.image} src={`/src/assets/images/${imageSrc}`} alt="Genre" />
        
        <p className={styles.title}>{title}</p>
        
        <div className={styles.actionBox}>
            <div className={styles.views}>
                <VideoIcon />
                <p>{21}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={e => handleEditGenre(e)}>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} scalePath={0.85}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 title={'Удалить жанр?'} question={'Вы действительно хотите удалить жанр?'} isOpen={isModalOpen2} onClose={closeModal2} confirmDeleteProject={handleDeleteGenre}/>
    </div>
  )
}

export default GenreCard