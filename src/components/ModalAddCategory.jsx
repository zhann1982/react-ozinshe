import React, {useState} from 'react'
import styles from '@css/ModalAddCategory.module.css'
import TimesIcon from '@icons/TimesIcon';
import InputText from '@components/InputText'

const ModalAddCategory = ({ isOpen, onClose, confirmAddCategory,title }) => {
    if (!isOpen) return null;

    const [category, setCategory] = useState('')
    

    const handleAddCategory = (e) => {
        e.preventDefault()
        if (category) {
            confirmAddCategory(category)
            setCategory('')
            onClose()
        } else {
            alert('Пожалуйста, заполните все поля')
        }
    }

    const handleInput = (value) => {
        setCategory(value)
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.titleBox}>
                    <h2>{title}</h2>
                    <button onClick={onClose}>
                    <TimesIcon width={24} height={24}  />
                    </button>
                </div>

                <div className={styles.inputBox}>
                    <InputText title={'Название категории'} onSelected={handleInput} />
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={e=>handleAddCategory(e)}>Добавить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalAddCategory