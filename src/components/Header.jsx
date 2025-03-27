import React from 'react'
import styles from '../assets/css/Header.module.css'
import LogoImageSVG from './icons/LogoImageSVG'
import SearchIcon from './icons/SearchIcon'
import ExitIcon from './icons/ExitIcon'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleExit = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <section className={styles.header}>
      <div className={styles.logoBox}>  
          <LogoImageSVG />
      </div>
      <div className={styles.inputBox}>
        <input className={styles.input} type="text" placeholder='Поиск' />
        <SearchIcon width={24} height={24}/>
      </div>
      <div className={styles.routerLink} onClick={handleExit}>Выйти
        <div className={styles.exitBox}>
          <ExitIcon width={24} height={24}/>
        </div>
      </div>
    </section>
  )
}

export default Header