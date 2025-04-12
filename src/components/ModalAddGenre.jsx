import React, {useState} from 'react'
import styles from '@css/ModalAddGenre.module.css'
import TimesIcon from '@icons/TimesIcon';
import DropDownSelect from '@components/DropDownSelect'
import DragAndDropUploader from '@components/DragAndDropUploader'
import {filmCards} from '@services/filmCardBase'

const ModalAddGenre = ({ isOpen, onClose, confirmAddGenre,title }) => {
    if (!isOpen) return null;

    const [allSelected, setAllSelected] = useState([false, false, false])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [selectedPlaceCount, setSelectedPlaceCount] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)

    const handleSelectedFilm = (selectedFilm) => {
        if (selectedFilm) {
            setSelectedFilm(selectedFilm)
            setAllSelected(prev => {
                const newSelected = [...prev]
                newSelected[0] = true
                return newSelected
            })
        }
    }

    const handleSelectedPlaceCount = (selectedPlaceCount) => {
        if (selectedPlaceCount) {
            setSelectedPlaceCount(selectedPlaceCount)
            setAllSelected(prev => {
                const newSelected = [...prev]
                newSelected[1] = true
                return newSelected
            })
        }
    }

    const handleThumbnail = (file) => {
        if (file) {
            setThumbnail(file)
            setAllSelected(prev => {
                const newSelected = [...prev]
                newSelected[2] = true
                return newSelected
            })
        }
    }

    const handleAddToMainProjects = (e) => {
        e.preventDefault()
        if (allSelected[0] && allSelected[1] && allSelected[2]) {
            confirmAddToMainProjects(
                {
                    title: selectedFilm,
                    placeCount: selectedPlaceCount,
                    thumbnailFile: thumbnail,
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
                    <DropDownSelect
                        title="Выберите проект"
                        options={filmCards.map((film) => film.title)}
                        onSelected={handleSelectedFilm}
                        // valuePreselected={["Проект 1"]}
                    />

                    <DropDownSelect
                        title="Выберите очередность"
                        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                        onSelected={handleSelectedPlaceCount}
                        // valuePreselected={["1"]}  
                    />

                    <DragAndDropUploader onImageUpload={handleThumbnail} id="thumbnail"/>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={e=>handleAddToMainProjects(e)}>Добавить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalAddGenre