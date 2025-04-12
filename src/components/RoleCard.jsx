import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '@css/CategoryCard.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import VideoIcon from '@icons/VideoIcon'
import ModalDeleteProject2 from '@components/ModalDeleteProject2'
import { filterCategory } from '@services/filterArrays'

const RoleCard = ({roleObj}) => {

    let categories = [...filterCategory]; // will be replaced with server response data
    categories.shift()

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
  
    const handleDeleteRole = (e) => {
        e.preventDefault()
        let newCategories = categories.filter((category) => category !== title)
        // filterCategory = [filterCategory[0], ...newCategories]
        // add server request to delete category
        closeModal2(e)
    }

    const handleEditCategory = (e) => {
        e.preventDefault()
        
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
                <button onClick={e => handleEditCategory(e)}>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} scalePath={0.85}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 title={'Удалить роль?'} question={'Вы действительно хотите удалить роль?'} isOpen={isModalOpen2} onClose={closeModal2} confirmDeleteProject={handleDeleteRole}/>
    </div>
  )
}

export default RoleCard