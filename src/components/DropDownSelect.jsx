import styles from '../assets/css/DropDownSelect.module.css';
import { useState } from 'react';

const Dropdown = ({ title, options, onSelected}) => {
  const [down,setDown] = useState(false)

  return (
    <div className={styles.dropdown}>
      <label className={styles.displayLabel}>{title}</label>
      <select 
        onChange={((e) =>onSelected(e.target.value))}
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