import React from 'react'
import styles from '../assets/css/NotFoundPage.module.css'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.centered}>
        <h1 className={styles.header}>404</h1>
        <h2 className={styles.infoText}>Page not found</h2>
        <div className={styles.actions}>
            <button 
                className={styles.buttonSubmit}
                onClick={()=>navigate(-1)}
            >
                Go back
            </button>
            <button 
                className={styles.buttonSubmit}
                onClick={()=>navigate('/')}
            >
                Go Home
            </button>
        </div>
    </div>
  )
}

export default NotFoundPage