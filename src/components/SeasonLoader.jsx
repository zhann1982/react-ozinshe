import React, { useState } from 'react'
import SeriesLoader from './SeriesLoader'
import styles from '../assets/css/SeasonLoader.module.css'

const SeasonLoader = ({seasonCount}) => {
    const [data, setData] = useState([])
    const handleFilled = (obj) => {
        setData([...data, obj])
    }
  return (
    <div className={styles.seasonLoader}>
        {Array(+seasonCount).fill('').map((_, index) => (
            <div key={index} className={styles.seasonLoaderBox}>
                <h2>{index + 1} сезон</h2>
                <SeriesLoader onFilled={handleFilled} season={index + 1}/>
                {
                    (index<seasonCount-1)
                    ?(<div className={styles.grayLine}></div>)
                    :(<div></div>)
                }
            </div>
        ))}
        {console.log(data)}
    </div>
  )
}

export default SeasonLoader