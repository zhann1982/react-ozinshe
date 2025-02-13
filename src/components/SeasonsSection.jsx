import React from 'react'
import styles from '../assets/css/SeasonsSection.module.css'
import { useState } from 'react'

const SeasonsSection = ({project}) => {
  const [seasonSelected, setSeasonSelected] = useState(0)
  const [seriesSelected, setSeriesSelected] = useState(0)

  const handleSeasonTabs = (e, index) => {
    setSeasonSelected(prev => {
      if (prev==index) return prev
      setSeriesSelected(0)
      return index
    })
  }
  const handleSeriesTabs = (e, index) => {
    setSeriesSelected(index)
  }
  return (
    <div className={styles.seasonsSection}>
        <div className={styles.seasonsTabs}>
          {project.seasons.map((item,index)=>(
            <button 
              key={index} 
              onClick={e=>handleSeasonTabs(e, index)}
              data-active={(seasonSelected==index)?'active':'regular'}
              className={(seasonSelected==index)?styles.activeSeason:styles.regularSeason}
            >
              {`${index+1} сезон`}
            </button>
          ))}
        </div>
        <div className={styles.seriesBox}>
          <div className={styles.seriesTabs}>
            {project.seasons[seasonSelected].series.map((item,index)=>(
              <button 
                key={index} 
                onClick={e=>handleSeriesTabs(e, index)}
                data-active={(seriesSelected==index)?'active':'regular'}
                className={(seriesSelected==index)?styles.activeSerie:styles.regularSerie}
              >
                {`${index+1} серия`}
              </button>
            ))}
          </div>
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

export default SeasonsSection