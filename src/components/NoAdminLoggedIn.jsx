import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../assets/css/NoAdminLoggedIn.module.css'

const NoAdminLoggedIn = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.titleBox}>
                    <h2>Вы не авторизованы</h2>
                </div>
                <p>Перейдите на страницу авторизации</p>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={()=>navigate('/')}>Перейти</button>    
                </div>   
            </div>
        </div>
    )
}

export default NoAdminLoggedIn