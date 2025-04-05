import React from 'react'
import styles from '@css/ModalSuccess.module.css'
import SuccessIcon from '@icons/SuccessIcon';
import TimesIcon from '@icons/TimesIcon';

const ModalSuccess = ({ isOpen, onClose, title }) => {

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.titleBox}>
                    <button onClick={onClose}>
                    <TimesIcon width={24} height={24}  />
                    </button>
                </div>
                <div className={styles.iconBox}>
                    <SuccessIcon width={48} height={48} />
                </div>
                <h2>{title}</h2>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={onClose}>Закрыть</button>    
                </div>    
            </div>
        </div>
  )
}

export default ModalSuccess