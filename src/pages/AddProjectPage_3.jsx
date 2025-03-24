import React, {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import styles from '../assets/css/AddProjectPage_3.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  ChevronRight  from '../components/icons/ChevronRight'
import  BackArrowIcon  from '../components/icons/BackArrowIcon'
import DragAndDropUploader from '../components/DragAndDropUploader'

const AddProjectPage_3 = () => {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState(false)
    const [thumbnail, setThumbnail] = useState(null)
    const [screenshots, setScreenshots] = useState([])

    const handleThumbnail = (file) => {  
        console.log("file", file);
        setThumbnail(file);
    }

    const handleSubmit = (e) => {   
        e.preventDefault()
        console.log("thumbnail", thumbnail);
        navigate("/add-project-3");
    }

    return (
        <MainLayout>
            <div className={styles.whiteBG}>
                <div className={styles.container}>
                    <div className={styles.pagePath}>
                        <Link to={"/projects"}>Проекты</Link>
                        <ChevronRight width={16} height={16} />
                        <p>Добавить проект</p>
                    </div>

                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                        <div className={styles.formHeader}>
                            <button
                                className={styles.backButton}
                                onClick={(e) => {e.preventDefault(); navigate("/add-project-2")}}
                            >
                                <BackArrowIcon width={20} height={20} />
                            </button>
                            <h1>Обложка и скриншоты</h1>
                        </div>

                        <DragAndDropUploader onImageUpload={handleThumbnail}/>

                        <div className={styles.actionButtons}>
                            <button className={styles.backButton2} onClick={()=>navigate(-1)}>Назад</button>
                            <button type='submit' className={activeButton?styles.activated:styles.disabled}>Добавить</button>
                            <button className={styles.cancelButton} onClick={()=>navigate('/projects')}>Отмена</button>
                        </div>

                    </form>    
                </div>
            </div>  
        </MainLayout>
    )
}

export default AddProjectPage_3