import React from 'react'
import SeriesLoader from './SeriesLoader'
import styles from '../assets/css/SeasonLoader.module.css'

const SeasonLoader = ({seasonCount}) => {
    const handleFilled = (obj) => {
        console.log(obj)
    }
  return (
    <div className={styles.seasonLoader}>
        {Array(+seasonCount).fill('').map((_, index) => (
            <div key={index} className={styles.seasonLoaderBox}>
                <h2>{index + 1} сезон</h2>
                <SeriesLoader onFilled={handleFilled} season={index + 1}/>
            </div>
        ))}
    </div>
  )
}

export default SeasonLoader