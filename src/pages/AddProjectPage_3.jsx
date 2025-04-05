import React, {useEffect, useState} from 'react'
import MainLayout from '@layouts/MainLayout'
import styles from '@css/AddProjectPage_3.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  ChevronRight  from '@icons/ChevronRight'
import  BackArrowIcon  from '@icons/BackArrowIcon'
import DragAndDropUploader from '@components/DragAndDropUploader'
import DragAndDropUploaderMulti from '@components/DragAndDropUploaderMulti'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'
import TrashIcon from '@icons/TrashIcon'   
import ModalSuccess from '@components/ModalSuccess'

const AddProjectPage_3 = () => {
    const navigate = useNavigate()
    const [alignCenter, setAlignCenter] = useState(false)
    const [activeButton, setActiveButton] = useState(false)
    const [thumbnail, setThumbnail] = useState(null)
    const [screenshots, setScreenshots] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    }
  
    const closeModal = () => {setIsModalOpen(false); navigate('/projects')};

    const handleThumbnail = (file) => {  
        if (file) {
            setThumbnail(file);
            setActiveButton(true);
            setAlignCenter(true);
        } else {
            setThumbnail(null);
            setActiveButton(false);
            setAlignCenter(false);
        }
    }

    const handleScreenShots = (files) => {
        if (files.length>0) {
            setScreenshots([...screenshots, ...files]);
            setActiveButton(true);
            setAlignCenter(true);
        } else {
            // setScreenshots([]);
            setActiveButton(false);
            setAlignCenter(false);
        }
    }

    const handleSubmit = (e) => {   
        e.preventDefault()
        console.log("data 3", thumbnail, screenshots);
        // data will be sent to the server
        openModal();
    }

    const clearFileInput = (index) => () => {
        const newScreenshots = [...screenshots];
        newScreenshots.splice(index, 1);
        setScreenshots(newScreenshots);
    }

    useEffect(() => {
        if (thumbnail || screenshots.length>0) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }, [thumbnail, screenshots])

    if (!isAdminLoggedIn()) {
        return <NoAdminLoggedIn />
    } else return (
        <MainLayout>
            <div className={styles.whiteBG}>
                <div className={styles.container}>
                    <div className={styles.pagePath}>
                        <Link to={"/projects"}>Проекты</Link>
                        <ChevronRight width={16} height={16} />
                        <p>Добавить проект</p>
                    </div>

                    <form className={styles.formContainer} >
                        <div className={styles.formHeader}>
                            <button
                                className={styles.backButton}
                                onClick={(e) => {e.preventDefault(); navigate("/add-project-2")}}
                            >
                                <BackArrowIcon width={20} height={20} />
                            </button>
                            <h1>Обложка и скриншоты</h1>
                        </div>

                        <div className={styles.loaderBox}>
                            <h2 style={{ textAlign: alignCenter?'center':'left' }}>Обложка</h2>
                            <p style={{ textAlign: alignCenter?'center':'left' }}>Рекомендуется использовать картинки размером не менее 375×550px</p>
                            <DragAndDropUploader onImageUpload={handleThumbnail} id="thumbnail"/>
                        </div>

                        <div className={styles.grayLine}></div>

                        <div className={styles.loaderBox}>
                            <h2 style={{ textAlign: alignCenter?'center':'left' }}>Скриншоты</h2>
                            <p style={{ textAlign: alignCenter?'center':'left' }}>Рекомендуется использовать картинки размером не менее 400×226px</p>
                            <DragAndDropUploaderMulti onImageUpload={handleScreenShots} id='screenshots'/>
                        </div>
                        <div className={styles.screenShotsContainer}>
                            {screenshots.map((screenshot, index) => (
                                <div key={index} className={styles.screenShotBox}>
                                    <img 
                                        className={styles.screenShotImage}
                                        src={URL.createObjectURL(screenshot)} 
                                        alt={`screenshot-${index}`} 
                                    />
                                    <div 
                                        className={styles.deleteIconBox} 
                                        onClick={clearFileInput(index)}
                                        >
                                        <TrashIcon width={20} height={20} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actionButtons}>
                            <button className={styles.backButton2} onClick={(e)=>{e=>preventDefault(); navigate('/add-project-2')}}>Назад</button>
                            <button className={activeButton?styles.activated:styles.disabled} onClick={handleSubmit}>Добавить</button>
                            <button className={styles.cancelButton} onClick={(e)=>{e=>preventDefault(); navigate('/projects')}}>Отмена</button>
                        </div>

                    </form>    
                </div>

                <ModalSuccess 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                    title='Проект добавлен успешно!'
                />
            </div>  
        </MainLayout>
    )
}

export default AddProjectPage_3