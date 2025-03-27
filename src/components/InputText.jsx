import styles from '../assets/css/InputText.module.css';
import { useState } from 'react';

const InputText = ({ title, onSelected, indexOfInput=null}) => {
  const [labelClass, setLabelClass] = useState(styles.displayNone)
  const [inputClass, setInputClass] = useState(styles.inputEmpty)

  const handleFocus = () => setLabelClass(styles.displayLabelFocused);
  const handleBlur = (e) => {
    if (e.target.value.length>0) {
      setLabelClass(styles.displayLabel);
    } else {
      setLabelClass(styles.displayNone);
    }
  }

  const handleInputChange = (e) => {
    onSelected(e.target.value, indexOfInput)
    if(e.target.value.length > 0){
      setLabelClass(styles.displayLabel)
      setInputClass(styles.inputFilled)
    } else {
      setLabelClass(styles.displayNone)
      setInputClass(styles.inputEmpty)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <label className={labelClass} >{title}</label>
      <input 
        
        className={inputClass}
        onChange={((e) =>handleInputChange(e))}
        onFocusCapture={handleFocus}
        onBlurCapture={(e)=>handleBlur(e)}
        type='text'
        placeholder={title}
      />
    </div>
  )
}

export default InputText;