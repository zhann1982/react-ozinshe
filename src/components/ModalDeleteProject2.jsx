import React from 'react'
import styles from '../assets/css/ModalDeleteProject.module.css'
import TimesIcon from './icons/TimesIcon';

const ModalDeleteProject = ({ isOpen, onClose, confirmDeleteProject,title }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.titleBox}>
                    <h2>{title}</h2>
                    <button onClick={onClose}>
                    <TimesIcon width={24} height={24}  />
                    </button>
                </div>
                <p>Вы действительно хотите удалить проект?</p>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={confirmDeleteProject}>Да, удалить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalDeleteProject