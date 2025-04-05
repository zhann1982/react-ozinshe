import styles from '@css/InputNumber.module.css';
import { useState } from 'react';

const InputNumber = ({ title, onSelected, valueOfInput}) => {
  const [labelClass, setLabelClass] =  useState(valueOfInput?styles.displayLabel:styles.displayNone)
  const [inputClass, setInputClass] = useState(valueOfInput?styles.inputFilled:styles.inputEmpty)

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
        value={valueOfInput}
        className={inputClass}
        onChange={((e) =>handleInputChange(e))}
        onFocusCapture={handleFocus}
        onBlurCapture={(e)=>handleBlur(e)}
        placeholder={title}
        type="number" min={3} max={180} 
      />
    </div>
  )
}

export default InputNumber;