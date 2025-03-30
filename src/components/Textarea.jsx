import styles from '../assets/css/Textarea.module.css';
import React, { useState } from 'react';

const Textarea = ({ title, onSelected, valueOfInput}) => {
  const [textareaClass, setTextareaClass] = useState(valueOfInput?styles.textareaFilled:styles.textareaEmpty)

  const handleInputChange = (e) => {
    
    onSelected(e.target.value)
    
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`

    if(e.target.value.length > 0){
        setTextareaClass(styles.textareaFilled)
    } else {
        setTextareaClass(styles.textareaEmpty)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <textarea
        value={valueOfInput}
        className={textareaClass}
        onChange={handleInputChange}
        placeholder={title}
      />
    </div>
  )
}

export default Textarea;