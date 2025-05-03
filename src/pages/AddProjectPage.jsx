import {useState, useEffect, useLayoutEffect} from 'react'
import MainLayout from '@layouts/MainLayout'
import styles from '@css/AddProjectPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  ChevronRight  from '@icons/ChevronRight'
import  BackArrowIcon  from '@icons/BackArrowIcon'
import DropDownSelect from '@components/DropDownSelect'
import InputText from '@components/InputText'
import InputNumber from '@components/InputNumber'
import Textarea from '@components/Textarea'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'
import { fetchCategories, fetchGenres, fetchAges } from '@services/server'
import axios from 'axios'


const AddProjectPage = () => {
  let checkInputsFilled = new Array(10).fill(false);
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [genres, setGenres] = useState([])
  const [ages, setAges] = useState([])
  const [inputsCheck, setInputsCheck] = useState(checkInputsFilled)
  const [hintClass, setHintClass] = useState(styles.hintTextVisible)
  const [submitButtonClass, setSubmitButtonClass] = useState(false)
  const [data, setData] = useState({
    title: '',
    categoryId: '',
    genreId: '',
    ageCategoryId: '',
    releaseYear : '',
    duration: null,
    keyWords: '',
    description:'',
    director: '',
    producer: ''
  })

  useLayoutEffect(() => {
    fetchAges(setAges),
    fetchGenres(setGenres),
    fetchCategories(setCategories)
  },[])

  const handleInputsAllFilled = () => {
    if(inputsCheck.every(item => item === true)){
      setSubmitButtonClass(true)
      console.log(data)
    } else {
      setSubmitButtonClass(false) 
    }
  }

  useEffect(() => {
    handleInputsAllFilled()
  }, [inputsCheck])

  const handleInputChange = (value, number) => { 
    if(value.length > 0){
      setInputsCheck(inputsCheck.map((item, index) => index === number ? true : item))
      if (number == 2) setHintClass(styles.hintTextDisplayNone)
    } else {
      setInputsCheck(inputsCheck.map((item, index) => index === number ? false : item))
      if (number == 2) setHintClass(styles.hintTextVisible)
    }

    switch (number) {
      case 0:
        setData({...data, title:value})
        break;

      case 1:
        setData({...data, duration:value})
        break;

      case 2:
        setData({...data, keyWords:value})
        break;

      case 3:
        setData({...data, director:value})
        break;

      case 4:
        setData({...data, producer:value})
        break;

      case 5:
        setData({...data, description:value})
        break;

      case 6:
        setData({...data, categoryId:categories.find(item => item.name === value).categoryId})
        break;

      case 7:
        setData({...data, genreId:genres.find(item => item.name === value).genreId})
        break;

      case 8:
        setData({...data, ageCategoryId:ages.find(item => item.name === value).ageCategoryId})
        break;

      case 9:
        setData({...data, releaseYear:value})
        break;

      default:
        break;
    }
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('releaseYear', data.releaseYear);
    formData.append('ageCategoryId', data.ageCategoryId); // Массив ID возрастных категорий
    formData.append('genreId', data.genreId); // Массив ID жанров
    formData.append('categoryId', data.categoryId); // Массив ID категорий
    formData.append('duration', data.duration);
    formData.append('director', data.director);
    formData.append('producer', data.producer);
    formData.append('keyWords', data.keyWords);
  
    try {
      const response = await axios.post('http://185.100.67.64/movies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json'
        }
      });
      console.log('фильм загружен на сервер', response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }

    if(submitButtonClass){
      navigate('/add-project-2')
    }
  }

  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
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
            <InputText title='Название проекта' onSelected={value=>handleInputChange(value, 0)} valueOfInput={data.title}/>
            <DropDownSelect title='Категория' options={categories.map(item=>item.name)} onSelected={value=>handleInputChange(value, 6)} />
            <div className={styles.row}>
              <DropDownSelect title='Тип проекта' options={genres.map(item=>item.name)} onSelected={value=>handleInputChange(value, 7)}/>
              <DropDownSelect title='Возрастная категория' options={ages.map(item=>item.name)} onSelected={value=>handleInputChange(value, 8)} />
            </div>
            <div className={styles.row}>
              {/* <DropDownSelect title='Год' options={filterYears} onSelected={value=>handleInputChange(value, 9)}/> */}
              <InputNumber title='Год' minValue={1991} maxValue={new Date().getFullYear()} onSelected={value=>handleInputChange(value, 9)} valueOfInput={data.yearProduced}/>
              <InputNumber title='Хронометраж (мин)' minValue={3} maxValue={230}  onSelected={value=>handleInputChange(value, 1)} valueOfInput={data.duration}/>
            </div>
            <InputText title='Ключевые слова' onSelected={value=>handleInputChange(value, 2)}  valueOfInput={data.keyTags}/>
          </div>  

          <p className={hintClass}>Например: мультфильм, мультсериал</p>

          <div className={styles.flexColumn2}>
            <Textarea title='Добавьте описание' onSelected={value=>handleInputChange(value, 5)} />
            <InputText title='Режиссер' onSelected={value=>handleInputChange(value, 3)}  valueOfInput={data.director}/>
            <InputText title='Продюссер' onSelected={value=>handleInputChange(value, 4)}  valueOfInput={data.producer}/>
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