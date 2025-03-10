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
  let checkInputsFilled = new Array(10).fill(false);
  const [inputsCheck, setInputsCheck] = useState(checkInputsFilled)

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

  const [submitButtonClass, setSubmitButtonClass] = useState(styles.disabled)

  const handleInputsAllFilled = () => {
    if(inputsCheck.every(item => item === true)){
      setSubmitButtonClass(styles.activated)
    } else {
      setSubmitButtonClass(styles.disabled) 
    }
  }

  const handleChange = (e) => {
    if(e.target.value.length > 0){
      setHintClass(styles.hintTextDisplayNone)
    } else {
      setHintClass(styles.hintTextVisible)
    }
  }

  const handleInputChange = (e) => { 
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 0 ? true : item))
      setLabelClass(styles.displayLabel)
      setInputClass(styles.inputFilled)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 0 ? false : item))
      setLabelClass(styles.displayNone)
      setInputClass(styles.inputEmpty)
    }
  }

  const handleInputChange1 = (e) => { 
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 1 ? true : item))
      setLabelClass1(styles.displayLabel)
      setInputClass1(styles.inputFilled)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 1 ? false : item))
      setLabelClass1(styles.displayNone)
      setInputClass1(styles.inputEmpty)
    }
  }

  const handleInputChange2 = (e) => { 
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 2 ? true : item))
      setLabelClass2(styles.displayLabel)
      setInputClass2(styles.inputFilled)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 2 ? false : item))
      setLabelClass2(styles.displayNone)
      setInputClass2(styles.inputEmpty)
    }
  }

  const handleInputChange3 = (e) => { 
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 3 ? true : item))
      setLabelClass3(styles.displayLabel)
      setInputClass3(styles.inputFilled)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 3 ? false : item))
      setLabelClass3(styles.displayNone)
      setInputClass3(styles.inputEmpty)
    }
  }

  const handleInputChange4 = (e) => { 
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 4 ? true : item))
      setLabelClass4(styles.displayLabel)
      setInputClass4(styles.inputFilled)
      handleInputsAllFilled()
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 4 ? false : item))
      setLabelClass4(styles.displayNone)
      setInputClass4(styles.inputEmpty)
    }
  }

  const handleTextareaChange = (e) => {
    if(e.target.value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 5 ? true : item))
      setTextareaClass(styles.textareaFilled)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 5 ? false : item))
      setTextareaClass(styles.textareaEmpty)
    }
  }

  const navigate = useNavigate()

  const handleSelectCategory = (value) => {
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 6 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 6 ? false : item))
    }
  }

  const handleSelectType = (value) => {
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 7 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 7 ? false : item))
    }
  }

  const handleSelectAgeCategory = (value) => {
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 8 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 8 ? false : item))
    }
  }

  const handleSelectYear = (value) => {
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 9 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 9 ? false : item))
    }
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
              <DropDownSelect title='Год' options={filterYears} onSelected={handleSelectYear}/>

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

          <div className={styles.actionButtons}>
            <button type='submit' className={submitButtonClass}>Далее</button>
            <button className={styles.cancelButton}>Отмена</button>
          </div>
        </form>


      </div>
    </div>
    </MainLayout>
  )
}

export default AddProjectPage