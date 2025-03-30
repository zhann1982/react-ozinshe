import styles from '../assets/css/DropDownSelect.module.css';
import { useEffect, useState } from 'react';

const Dropdown = ({ title, options, onSelected, valuePreselected}) => {
  if (Array.isArray(valuePreselected)) {
    valuePreselected = valuePreselected.join(', ')
  }

  const [down,setDown] = useState(false)
  const [isSelected, setIsSelected] = useState(valuePreselected?true:false)
  const [labelClass, setLabelClass] = useState(valuePreselected?styles.displayLabel:styles.displayNone)
  const [inputClass, setInputClass] = useState(valuePreselected?styles.dropdownSeleted:styles.dropdown)

  const handleFocus = () => setLabelClass(styles.displayLabelFocused);
  const handleBlur = (e) => {
    if (e.target.value.length>0) {
      setLabelClass(styles.displayLabel);
    } else {
      setLabelClass(styles.displayNone);
    }
  }

  const handleInputChange = (e) => {
    onSelected(e.target.value)
    if(e.target.value.length > 0){
      setLabelClass(styles.displayLabel)
      setInputClass(styles.dropdownSeleted)
      setIsSelected(true)
    } else {
      setLabelClass(styles.displayNone)
      setInputClass(styles.dropdown)
      setIsSelected(false)
    }
  }

  return (
    <div className={inputClass}>
      <label className={labelClass} >{title}</label>
      <select 
        onChange={((e) =>handleInputChange(e))}
        onClick={()=>setDown(!down)}
        onFocusCapture={handleFocus}
        onBlurCapture={(e)=>handleBlur(e)}
      >
        <option className={styles.disabled} value={valuePreselected??''}  defaultValue>{valuePreselected??title}</option>
        {options.map((opt,index)=>(
          <option key={index} value={opt}> {opt} </option>
        ))}
      </select>
      <img 
        style={{transform: down ? "rotate(180deg)":"rotate(0deg)"}} 
        src={!isSelected ? "/src/assets/images/chevronIcon.png":"/src/assets/images/chevronIconDark.png"} 
        alt="icon" 
      />

    </div>
  )
}

export default Dropdown;