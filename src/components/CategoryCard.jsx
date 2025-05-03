import {useState} from 'react'
import styles from '@css/CategoryCard.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import VideoIcon from '@icons/VideoIcon'
import ModalDeleteProject2 from '@components/ModalDeleteProject2'

const CategoryCard = ({title, categoryId, deleteConfirmed, editConfirmed}) => {


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
  
    const handleDeleteCategory = (e, bool) => {
        e.preventDefault()
        if (bool) {
            deleteConfirmed(categoryId)
            closeModal2(e)
        }
    }

    const handleEditCategory = (e, bool) => {
        e.preventDefault()
        if (bool) {
            editConfirmed(categoryId)
            closeModal2(e)
        }
    }

  return (
    <div className={styles.card}>
        
        <p className={styles.title}>{title}</p>
        
        <div className={styles.actionBox}>
            <div className={styles.views}>
                <VideoIcon />
                <p>{21}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={e => handleEditCategory(e, true)}>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} scalePath={0.85}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 
            title={'Удалить категорию?'} 
            question={'Вы действительно хотите удалить категорию?'} 
            isOpen={isModalOpen2} 
            onClose={closeModal2} 
            confirmDeleteProject={handleDeleteCategory}
        />
    </div>
  )
}

export default CategoryCard