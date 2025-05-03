import {useState} from 'react'
import styles from '@css/ModalAddGenre.module.css'
import TimesIcon from '@icons/TimesIcon';
import DragAndDropUploader from '@components/DragAndDropUploader'
import InputText from '@components/InputText'

const ModalAddGenre = ({ isOpen, onClose, confirmAddGenre,title }) => {
    if (!isOpen) return null;

    const [allSelected, setAllSelected] = useState([false, false])
    const [genreName, setGenreName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const handleInput = (value) => {
        setGenreName(value)
        setAllSelected([true, allSelected[1]])
    }

    const handleThumbnail = (file) => {
        if (file) {
            setThumbnail(file)
            setAllSelected([allSelected[0], true])
        }
    }

    const handleAddGenre = (e) => {
        e.preventDefault()
        if (allSelected[0] && allSelected[1]) {
            confirmAddGenre(
                {
                    genreName: genreName,
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
                    <InputText title={'Название жанра'} onSelected={handleInput}/>
                    <DragAndDropUploader onImageUpload={handleThumbnail} id="thumbnail"/>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={e=>handleAddGenre(e)}>Добавить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalAddGenre