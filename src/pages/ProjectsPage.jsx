import React from 'react'
import MainLayout from '@layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'

import styles from '@css/ProjectsPage.module.css'
import { 
  filterPopularity, 
  filterCategory, 
  filterType, 
  filterYears 
} from '@services/filterArrays'
import { filmCards } from '@services/filmCardBase'

import Plusicon from '@components/icons/PlusIcon'
import DropDown from '@components/DropDown'
import DropDownYear from '@components/DropDownYear'
import FilmCard from '@components/FilmCard'

const ProjectsPage = () => {
  const navigate = useNavigate()
  const projectsCount = 113  // will be replaced with server response data

  const handleSelect1 = (option) => {
    console.log(option)
  }
  const handleSelect2 = (option) => {
    console.log(option)
  }
  const handleSelect3 = (option) => {
    console.log(option)
  }

  const handleSelect4 = (option) => {
    console.log(option)
  }

  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Проекты
            <span className={styles.projectsCountNumber}>{projectsCount}</span>
          </h1>
          
          <button
            className={styles.buttonAdd}
            onClick={()=>navigate('/add-project')}
          >
            <Plusicon width={24} height={24}/>
            <p>Добавить</p>
          </button>
        </div>
        <div className={styles.filterBox}>
          <DropDown title={`Сортировать:`} options={filterPopularity} onSelect={handleSelect1}/>  
          <DropDown title={`Категория:`} options={filterCategory} onSelect={handleSelect2}/>  
          <DropDown title={`Тип:`} options={filterType} onSelect={handleSelect3}/> 
          <div className={styles.toRight}>
            <DropDownYear options={filterYears} onSelect={handleSelect4}/>  
          </div> 
        </div>
        <div className={styles.cardBox}>
          {filmCards.map(film=>(
              <FilmCard 
                key={film.id}
                id={film.id}
                title={film.title}
                category={film.category}
                views={film.viewsCount}
                seriesCount={film.lastSerieAdded}
                imageSrc={`url(/src/assets/images/${film.thumbnail})`}
              />
          ))}
        </div>
      </section>
    </div>
    </MainLayout>
  )
}

export default ProjectsPage