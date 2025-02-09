import React from 'react'
import styles from '../assets/css/Header.module.css'
import LogoImageSVG from './icons/LogoImageSVG'
import SearchIcon from './icons/SearchIcon'
import ExitIcon from './icons/ExitIcon'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.logoBox}>
        <Link to={'/'}>
          <LogoImageSVG />
        </Link>
      </div>
      <div className={styles.inputBox}>
        <input className={styles.input} type="text" placeholder='Поиск' />
        <SearchIcon width={24} height={24}/>
      </div>
      <Link className={styles.routerLink} to={'/login'}>Выйти
        <div className={styles.exitBox}>
          <ExitIcon width={24} height={24}/>
        </div>
      </Link>
    </section>
  )
}

export default Header