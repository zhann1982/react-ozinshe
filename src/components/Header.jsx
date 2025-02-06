import React from 'react'
import styles from '../assets/css/Header.module.css'
import LogoImageSVG from './icons/LogoImageSVG'
import SearchIcon from './icons/SearchIcon'
import ExitIcon from './icons/ExitIcon'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className={styles.header}>
      <LogoImageSVG />
      <div className={styles.inputBox}>
        <input className={styles.input} type="text" placeholder='Поиск' />
        <SearchIcon width={24} height={24}/>
      </div>
      <Link to={'/login'}>Выйти</Link>
      <div className={styles.exitBox}>
        <ExitIcon width={24} height={24}/>
      </div>
    </section>
  )
}

export default Header