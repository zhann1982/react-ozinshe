import styles from '@css/DropDown.module.css';
import { useState } from 'react';

const Dropdown = ({title, options, onSelect}) => {
  const [down,setDown] = useState(false)

  return (
    <div className={styles.dropdown}>
      <p>{title}</p>
      
      <select 
        onChange={((e) =>onSelect(e.target.value))}
        onClick={()=>setDown(!down)}
      >
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