import styles from '../assets/css/DropDownSelect.module.css';
import { useState } from 'react';

const Dropdown = ({ title, options, onSelected}) => {
  const [down,setDown] = useState(false)
  const [labelClass, setLabelClass] = useState(styles.displayNone)
  const [inputClass, setInputClass] = useState(styles.dropdown)

  const handleInputChange = (e) => {
    onSelected(e.target.value)
    if(e.target.value.length > 0){
      setLabelClass(styles.displayLabel)
      setInputClass(styles.dropdownSeleted)
    } else {
      setLabelClass(styles.displayNone)
      setInputClass(styles.dropdown)
    }
  }

  return (
    <div className={inputClass}>
      <label className={labelClass}>{title}</label>
      <select 
        onChange={((e) =>handleInputChange(e))}
        onClick={()=>setDown(!down)}
      >
        <option className={styles.disabled} value=''  defaultValue>{title}</option>
        {options.map((opt,index)=>(
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      <img 
        style={{transform: down ? "rotate(180deg)":"rotate(0deg)"}} 
        src="/src/assets/images/chevronIcon.png" 
        alt="icon" 
      />

    </div>
  )
}

export default Dropdown;