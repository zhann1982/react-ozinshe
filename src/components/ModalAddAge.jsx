import React, {useState} from 'react'
import styles from '@css/ModalAddAge.module.css'
import TimesIcon from '@icons/TimesIcon';
import DragAndDropUploader from '@components/DragAndDropUploader'
import InputText from '@components/InputText'

const ModalAddAge = ({ isOpen, onClose, confirmAddAge,title }) => {
    if (!isOpen) return null;

    const [allSelected, setAllSelected] = useState([false, false])
    const [ageName, setAgeName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const handleInput = (value) => {
        setAgeName(value)
        setAllSelected([true, allSelected[1]])
    }

    const handleThumbnail = (file) => {
        if (file) {
            setThumbnail(file)
            setAllSelected([allSelected[0], true])
        }
    }

    const handleAddAge = (e) => {
        e.preventDefault()
        if (allSelected[0] && allSelected[1]) {
            confirmAddAge(
                {
                    ageName: ageName,
                    image: thumbnail,
                }
            )
        } else {
            alert('Пожалуйста, заполните все поля')
        }
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
                    <InputText title={'Название'} onSelected={handleInput}/>
                    <DragAndDropUploader onImageUpload={handleThumbnail} id="thumbnail"/>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={e=>handleAddAge(e)}>Добавить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalAddAge