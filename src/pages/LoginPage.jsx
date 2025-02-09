import styles from '../assets/css/LoginPage.module.css'
import React from 'react'
import MainIcon from '../components/icons/MainIcon'

const LoginPage = () => {
  return (
    <div className={styles.formOverlay}>
        <MainIcon width={80} height={80} />
        <form className={styles.formBox}>
            <h2 className={styles.title}>Добро пожаловать</h2>
            <p className={styles.info}>Войдите в систему, чтобы продолжить</p>
            <input 
                className={styles.inputEmail} 
                type="email" 
                placeholder='Email'
            />
            <input 
                className={styles.inputPassword} 
                type="password" 
                placeholder='Пароль'
            />
            <button 
                className={styles.buttonSubmit}
                type='submit'
            >
                Войти
            </button>
            <p className={styles.resetInfo}>Забыли пароль?
                <a className={styles.reserLink} href="#">Восстановить</a>
            </p>
        </form>
    </div>
    
  )
}

export default LoginPage