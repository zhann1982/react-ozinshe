import React, { useState } from 'react'
import SeriesLoader from './SeriesLoader'
import styles from '../assets/css/SeasonLoader.module.css'
import { use } from 'react'

const SeasonLoader = ({seasonCount, onSeasonFilled}) => {
    const [data, setData] = useState([])

    const handleFilled = (obj) => {
        let arr = [...data]
        let index = arr.findIndex(item => item.seasonNumber == obj.seasonNumber)
        if (index != -1) {
            arr[index] = obj
        } else {
            arr.push(obj)
        }
        setData([...arr])
    }

    onSeasonFilled(data)    

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
    </div>
  )
}

export default SeasonLoader