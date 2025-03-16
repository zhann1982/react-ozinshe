import styles from '../assets/css/Textarea.module.css';
import React, { useState } from 'react';

const Textarea = ({ title, onSelected}) => {
  const [textareaClass, setTextareaClass] = useState(styles.textareaEmpty)

  const handleInputChange = (e) => {
    
    onSelected(e.target.value)
    

    if(e.target.value.length > 0){
        setTextareaClass(styles.textareaFilled)
    } else {
        setTextareaClass(styles.textareaEmpty)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <textarea
        className={textareaClass}
        onChange={handleInputChange}
        placeholder={title}
      />
    </div>
  )
}

export default Textarea;