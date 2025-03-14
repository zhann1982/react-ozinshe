import styles from '../assets/css/Sidebar.module.css'

import {useEffect, useState} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import ProjectsIcon from './icons/ProjectsIcon'
import HomeIcon from './icons/HomeIcon'
import CategoriesIcon from './icons/CategoriesIcon'
import UsersIcon from './icons/UsersIcon'
import RolesIcon from './icons/RolesIcon'
import GenresIcon from './icons/GenresIcon'
import AgesIcon from './icons/AgesIcon'

const Sidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const handleActiveLink = () => {
    if(location.pathname === '/projects' || location.pathname.includes('/edit-project') || location.pathname.includes('/add-project') || location.pathname.includes('/details')) {
      return styles.active
    } else {
      console.log('not active')
      return styles.navItem
    }
  }

  return (
    <section className={styles.sidebar}>
      <NavLink 
        to={'/projects'} 
        className={handleActiveLink}
      >
        <ProjectsIcon width={24} height={24} color={"#7E2DFC"} />
        <p>Проекты</p>
      </NavLink>
      <NavLink to={'/main-projects'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <HomeIcon  width={24} height={24} color={"#8F92A1"} />
        <p>Проекты на главной</p>
      </NavLink>
      <NavLink to={'/categories'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <CategoriesIcon width={24} height={24} color={"#8F92A1"} /> 
        <p>Категории</p>
      </NavLink>
      <NavLink to={'/users'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <UsersIcon width={24} height={24} color={"#8F92A1"}  />
        <p>Пользователи</p>
      </NavLink>
      <NavLink to={'/roles'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <RolesIcon width={24} height={24} color={"#8F92A1"}  />
        <p>Роли</p>
      </NavLink>
      <NavLink to={'/genres'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <GenresIcon width={24} height={24} color={"#8F92A1"}  />
        <p>Жанры</p>
      </NavLink>
      <NavLink to={'/ages'} className={({ isActive }) => (isActive ? styles.active : styles.navItem)}>
        <AgesIcon width={24} height={24} color={"#8F92A1"}  />
        <p>Возрасты</p>
      </NavLink>
    </section>
  )
}

export default Sidebar