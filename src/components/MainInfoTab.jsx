import React, {useState, useEffect} from 'react'
import styles from '../assets/css/MainInfoTab.module.css'
import { filterAgeCategories, filterCategory, filterType, filterYears } from '../sevices/filterArrays'
import DropDownSelect from './DropDownSelect'
import InputText from './InputText'
import InputNumber from './InputNumber'
import Textarea from './Textarea'



const MainInfoTabs = () => {
  let checkInputsFilled = new Array(10).fill(false);
  const [inputsCheck, setInputsCheck] = useState(checkInputsFilled)
  const [hintClass, setHintClass] = useState(styles.hintTextVisible)
  const [submitButtonClass, setSubmitButtonClass] = useState(false)
  const [data, setData] = useState({
    title: '',
    category: '',
    type: '',
    ageCategory: '',
    yearProduced: '',
    duration: null,
    keyTags: [],
    description:'',
    director: '',
    producer: ''
  })

  useEffect(() => {
    handleInputsAllFilled()
  }, [inputsCheck])
  
  const handleInputsAllFilled = () => {
    if(inputsCheck.every(item => item === true)){
      setSubmitButtonClass(true)
      // console.log(data)
    } else {
      setSubmitButtonClass(false) 
    }
  }
  
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
        setData({...data, keyTags:value})
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
        setData({...data, category:value})
        break;

      case 7:
        setData({...data, type:value})
        break;

      case 8:
        setData({...data, ageCategory:value})
        break;

      case 9:
        setData({...data, yearProduced:value})
        break;

      default:
        break;
    }
  }
  
  return (
    <div>
      <div className={styles.flexColumn}>
        <InputText title='Название проекта' onSelected={value=>handleInputChange(value, 0)} valueOfInput={data.title}/>
        <DropDownSelect title='Категория' options={filterCategory} onSelected={value=>handleInputChange(value, 6)} />
        <div className={styles.row}>
          <DropDownSelect title='Тип проекта' options={filterType} onSelected={value=>handleInputChange(value, 7)}/>
          <DropDownSelect title='Возрастная категория' options={filterAgeCategories} onSelected={value=>handleInputChange(value, 8)} />
        </div>
        <div className={styles.row}>
          <DropDownSelect title='Год' options={filterYears} onSelected={value=>handleInputChange(value, 9)}/>
          <InputNumber title='Хронометраж (мин)' onSelected={value=>handleInputChange(value, 1)} />
        </div>
        <InputText title='Ключевые слова' onSelected={value=>handleInputChange(value, 2)}  valueOfInput={data.keyTags}/>
      </div>  

      <p className={hintClass}>Например: мультфильм, мультсериал</p>

      <div className={styles.flexColumn2}>
        <Textarea title='Добавьте описание' onSelected={value=>handleInputChange(value, 5)} />
        <InputText title='Режиссер' onSelected={value=>handleInputChange(value, 3)}  valueOfInput={data.director}/>
        <InputText title='Продюссер' onSelected={value=>handleInputChange(value, 4)}  valueOfInput={data.producer}/>
      </div>
    </div>
  )
}

export default MainInfoTabs