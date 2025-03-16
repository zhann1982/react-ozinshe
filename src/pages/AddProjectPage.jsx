import React, {useState, useEffect} from 'react'
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
import InputText from '../components/InputText'
import InputNumber from '../components/InputNumber'


const AddProjectPage = () => {
  const navigate = useNavigate()

  let checkInputsFilled = new Array(10).fill(false);
  const [inputsCheck, setInputsCheck] = useState(checkInputsFilled)
  const [hintClass, setHintClass] = useState(styles.hintTextVisible)
  const [textareaClass, setTextareaClass] = useState(styles.textareaEmpty)
  const [submitButtonClass, setSubmitButtonClass] = useState(false)

  useEffect(() => {
    handleInputsAllFilled()
  }, [inputsCheck])

  const handleInputsAllFilled = () => {
    if(inputsCheck.every(item => item === true)){
      setSubmitButtonClass(true)
    } else {
      setSubmitButtonClass(false) 
    }
  }
  
  const handleInputChange1 = (value) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 1 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 1 ? false : item))
    }
  }

  const handleInputChange2 = (value) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 2 ? true : item))
      setHintClass(styles.hintTextDisplayNone)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 2 ? false : item))
      setHintClass(styles.hintTextVisible)
    }
  }

  const handleInputChange3 = (value) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 3 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 3 ? false : item))
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

  const handleInputChange = (value) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 0 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 0 ? false : item))
    }
  }

  const handleInputChange4 = (value) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === 4 ? true : item))
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === 4 ? false : item))
    }
  }
  
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

  const handleSubmitForm = (e) => {
    e.preventDefault()
    // here we can send new project's data to server
    if(submitButtonClass){
      navigate('/add-project-2')
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

        <form className={styles.formContainer} onSubmit={(e)=>handleSubmitForm(e)}>

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
            <InputText title='Название проекта' onSelected={handleInputChange}/>
            <DropDownSelect title='Категория' options={filterCategory} onSelected={handleSelectCategory}/>
            <div className={styles.row}>
              <DropDownSelect title='Тип проекта' options={filterType} onSelected={handleSelectType}/>
              <DropDownSelect title='Возрастная категория' options={filterAgeCategories} onSelected={handleSelectAgeCategory} />
            </div>
            <div className={styles.row}>
              <DropDownSelect title='Год' options={filterYears} onSelected={handleSelectYear}/>
              <InputNumber title='Хронометраж (мин)' onSelected={handleInputChange1} />
            </div>
            <InputText title='Ключевые слова' onSelected={handleInputChange2}/>
          </div>  

          <p className={hintClass}>Например: мультфильм, мультсериал</p>

          <div className={styles.flexColumn2}>
            <div className={styles.inputWrapper}>
              <textarea className={textareaClass} onChange={e=>handleTextareaChange(e)} placeholder='Добавьте описание'/>  
            </div>
            <InputText title='Режиссер' onSelected={handleInputChange3}/>
            <InputText title='Продюссер' onSelected={handleInputChange4}/>
          </div>

          <div className={styles.actionButtons}>
            <button type='submit' className={submitButtonClass?styles.activated:styles.disabled}>Далее</button>
            <button className={styles.cancelButton} onClick={()=>navigate('/projects')}>Отмена</button>
          </div>
        </form>


      </div>
    </div>
    </MainLayout>
  )
}

export default AddProjectPage