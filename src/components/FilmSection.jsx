import React from 'react'
import styles from '../assets/css/FilmSection.module.css'

const FilmSection = ({project}) => {
  return (
    <div className={styles.seasonsSection}>
        <div className={styles.seriesBox}>
          <div className={styles.description}>
            <h2>Описание</h2>
            <p className={styles.text}>
              {project.description}
            </p>
            <div className={styles.flexBox}>
              <div className={styles.labels}>
                <p>Режиссер:</p>
                <p>Продюсер:</p>
              </div>
              <div className={styles.names}>
                <p>{project.director}</p>
                <p>{project.producer}</p>
              </div>
            </div>  
          </div>
        </div>
        <div className={styles.screenshotsBox}>
          <h2>Скриншоты</h2>
          <div className={styles.screenshots}>
            {project.screenshots.map((item,index)=>(
              <img key={index}  src={item} alt="screenshot" />
            ))}
          </div>
        </div>
    </div>
  )
}

export default FilmSection