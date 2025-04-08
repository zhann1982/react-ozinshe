import React, {useState} from 'react'
import styles from '@css/ModalShowUser.module.css'
import TimesIcon from '@icons/TimesIcon';

const ModalShowUser = ({ isOpen, onClose, title, user }) => {

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
                <div className={styles.infoBox}>
                    <img src="/src/assets/images/happySmiley.png" alt="Happy Smiley image" />
                    <p className={styles.name}>{user.name}</p>
                    <p className={styles.phone}>{user.phone}</p>
                    <p className={styles.email}>{user.email}</p>
                    <p className={styles.occupation}>{user.occupation}</p>
                </div>
                <div className={styles.buttonBox}>
                     <button className={styles.buttonYes} onClick={onClose}>Закрыть</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalShowUser