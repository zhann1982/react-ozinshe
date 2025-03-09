import React, {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import styles from '../assets/css/AddProjectPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  ChevronRight  from '../components/icons/ChevronRight'
import  BackArrowIcon  from '../components/icons/BackArrowIcon'
import { 
  filterAgeCategories, 
  filterCategory, 
  filterType, 
  filterYears 
} from '../sevices/filterArrays'
import DropDownSelect from '../components/DropDownSelect'


const AddProjectPage = () => {
  const [hintClass, setHintClass] = useState(styles.hintTextVisible)
  const [labelClass, setLabelClass] = useState(styles.displayNone)
  const [labelClass1, setLabelClass1] = useState(styles.displayNone)
  const [labelClass2, setLabelClass2] = useState(styles.displayNone)
  const [labelClass3, setLabelClass3] = useState(styles.displayNone)
  const [labelClass4, setLabelClass4] = useState(styles.displayNone)

  const [inputClass, setInputClass] = useState(styles.inputEmpty)
  const [inputClass1, setInputClass1] = useState(styles.inputEmpty)
  const [inputClass2, setInputClass2] = useState(styles.inputEmpty)
  const [inputClass3, setInputClass3] = useState(styles.inputEmpty)
  const [inputClass4, setInputClass4] = useState(styles.inputEmpty)

  const [textareaClass, setTextareaClass] = useState(styles.textareaEmpty)

  const handleChange = (e) => {
    if(e.target.value.length > 0){
      setHintClass(styles.hintTextDisplayNone)
    } else {
      setHintClass(styles.hintTextVisible)
    }
  }

  const handleInputChange = (e) => { 
    if(e.target.value.length > 0){
      setLabelClass(styles.displayLabel)
      setInputClass(styles.inputFilled)
    } else {
      setLabelClass(styles.displayNone)
      setInputClass(styles.inputEmpty)
    }
  }

  const handleInputChange1 = (e) => { 
    if(e.target.value.length > 0){
      setLabelClass1(styles.displayLabel)
      setInputClass1(styles.inputFilled)
    } else {
      setLabelClass1(styles.displayNone)
      setInputClass1(styles.inputEmpty)
    }
  }

  const handleInputChange2 = (e) => { 
    if(e.target.value.length > 0){
      setLabelClass2(styles.displayLabel)
      setInputClass2(styles.inputFilled)
    } else {
      setLabelClass2(styles.displayNone)
      setInputClass2(styles.inputEmpty)
    }
  }

  const handleInputChange3 = (e) => { 
    if(e.target.value.length > 0){
      setLabelClass3(styles.displayLabel)
      setInputClass3(styles.inputFilled)
    } else {
      setLabelClass3(styles.displayNone)
      setInputClass3(styles.inputEmpty)
    }
  }

  const handleInputChange4 = (e) => { 
    if(e.target.value.length > 0){
      setLabelClass4(styles.displayLabel)
      setInputClass4(styles.inputFilled)
    } else {
      setLabelClass4(styles.displayNone)
      setInputClass4(styles.inputEmpty)
    }
  }

  const handleTextareaChange = (e) => {
    if(e.target.value.length > 0){
      setTextareaClass(styles.textareaFilled)
    } else {
      setTextareaClass(styles.textareaEmpty)
    }
  }

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
              onClick={()=>navigate('/projects')}
            >
              <BackArrowIcon width={20} height={20}/>
            </button>
            <h1>Основная информация</h1>
          </div>

          <div className={styles.flexColumn}>
            <div className={styles.inputWrapper}>
              <label className={labelClass}>Название проекта</label>
              <input className={inputClass} onChange={e=>handleInputChange(e)} type="text" placeholder='Название проекта'/>
            </div>

            <DropDownSelect title='Категория' options={filterCategory} onSelected={handleSelectCategory}/>
            
            <div className={styles.row}>
              <DropDownSelect title='Тип проекта' options={filterType} onSelected={handleSelectType}/>
              <DropDownSelect title='Возрастная категория' options={filterAgeCategories} onSelected={handleSelectAgeCategory} />
            </div>

            <div className={styles.row}>
              <DropDownSelect title='Год' options={filterYears} onSelected={handleSelectType}/>

              <div className={styles.inputWrapper}>
                <label className={labelClass1}>{'Хронометраж (мин)'}</label>
                <input className={inputClass1} onChange={e=>handleInputChange1(e)} type="number" min={3} max={180} placeholder='Хронометраж (мин)'/>  
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <label className={labelClass2}>Ключевые слова</label>
              <input className={inputClass2} onChange={e=>{handleChange(e); handleInputChange2(e)}} type="text" placeholder='Ключевые слова'/>
            </div>
          </div>  

          <p className={hintClass}>Например: мультфильм, мультсериал</p>

          <div className={styles.flexColumn2}>
            <div className={styles.inputWrapper}>
              <textarea className={textareaClass} onChange={e=>handleTextareaChange(e)} placeholder='Добавьте описание'/>  
            </div>

            <div className={styles.inputWrapper}>
              <label className={labelClass3}>Режиссер</label>
              <input className={inputClass3} onChange={e=>handleInputChange3(e)} type="text" placeholder='Режиссер'/>
            </div>

            <div className={styles.inputWrapper}>
              <label className={labelClass4}>Продюссер</label>
              <input className={inputClass4} onChange={e=>handleInputChange4(e)} type="text" placeholder='Продюссер'/>
            </div>
          </div>


        </form>


      </div>
    </div>
    </MainLayout>
  )
}

export default AddProjectPage