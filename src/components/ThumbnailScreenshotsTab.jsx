import React from 'react'
import styles from '@css/ThumbnailScreenshotsTab.module.css'
import TrashIcon from '@icons/TrashIcon'
import { useState, useContext } from 'react'
import DragAndDropUploader from './DragAndDropUploader'
import DragAndDropUploaderMulti from './DragAndDropUploaderMulti'
import { EditContext } from '@pages/EditProjectPage'

const ThumbnailScreenshotsTab = () => {
  const {editedProject, setEditedProject} = useContext(EditContext)
  const [thumbnail, setThumbnail] = useState(null)
  const [screenshots, setScreenshots] = useState([])
  const [alignCenter, setAlignCenter] = useState(false)

  const handleThumbnail = (file) => {  
    if (file) {
        setThumbnail(file);
        setAlignCenter(true);
    } else {
        setThumbnail(null);
        setAlignCenter(false);
    }
  }

  const handleScreenShots = (files) => {
    if (files.length>0) {
        setScreenshots([...screenshots, ...files]);
        setAlignCenter(true);
    } else {
        // setScreenshots([]);
        setAlignCenter(false);
    }
  }

  const clearFileInput = (index) => () => {
    const newScreenshots = [...screenshots];
    newScreenshots.splice(index, 1);
    setScreenshots(newScreenshots);
  }

  return (
    <>
      <div className={styles.loaderBox}>
          <h2 style={{ textAlign: alignCenter?'center':'left' }}>Обложка</h2>
          <p style={{ textAlign: alignCenter?'center':'left' }}>Рекомендуется использовать картинки размером не менее 375×550px</p>
          <DragAndDropUploader onImageUpload={handleThumbnail} id="thumbnail" valuePreselected={editedProject.thumbnail}/>
      </div>

      <div className={styles.grayLine}></div>

      <div className={styles.loaderBox}>
          <h2 style={{ textAlign: alignCenter?'center':'left' }}>Скриншоты</h2>
          <p style={{ textAlign: alignCenter?'center':'left' }}>Рекомендуется использовать картинки размером не менее 400×226px</p>
          <DragAndDropUploaderMulti onImageUpload={handleScreenShots} id='screenshots' valuePreselected={editedProject.screenshots}/>
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
    </>
  )
}

export default ThumbnailScreenshotsTab