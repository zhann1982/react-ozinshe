import React from 'react'
import MainLayout from '../layouts/MainLayout'
import styles from '../assets/css/AddProjectPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  ChevronRight  from '../components/icons/ChevronRight'
import  BackArrowIcon  from '../components/icons/BackArrowIcon'
import { 
  filterPopularity, 
  filterCategory, 
  filterType, 
  filterYears 
} from '../sevices/filterArrays'
import DropDownSelect from '../components/DropDownSelect'


const AddProjectPage = () => {
  const navigate = useNavigate()

  const handleSelectCategory = (value) => {
    console.log(value)
  }

  const handleSelectType = (value) => {
    console.log(value)
  }

  const handleSelectAgeCategory = (value) => {
    console.log(value)
  }

  return (
    <MainLayout>
    <div className={styles.whiteBG}>
      <div className={styles.container}>
        <div className={styles.pagePath}>
          <Link to={'/projects'}>Проекты</Link>
          <ChevronRight width={16} height={16} />
          <p>Добавить проект</p>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formHeader}>
            <button 
              className={styles.backButton}
              onClick={()=>navigate(-1)}>
              <BackArrowIcon width={20} height={20}/>
            </button>
            <h1>Основная информация</h1>
          </div>
          <input type="text" placeholder='Название проекта'/>
          <DropDownSelect title='Категория' options={filterCategory} onSelect={handleSelectCategory}/>
          <div className={styles.row}>
            <DropDownSelect title='Тип проекта' options={filterType} onSelect={handleSelectType}/>
            <DropDownSelect title='Возрастная категория' options={filterYears} onSelect={handleSelectAgeCategory}/>
          </div>
          <div className={styles.row}>
            <DropDownSelect title='Год' options={filterYears} onSelect={handleSelectType}/>
            <input type="number" min={3} max={180} placeholder='Хронометраж (мин)'/>
          </div>
        </form>
      </div>
    </div>
    </MainLayout>
  )
}

export default AddProjectPage