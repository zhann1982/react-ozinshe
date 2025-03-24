import React, { useEffect, useState } from 'react'
import SeriesLoader from './SeriesLoader'
import styles from '../assets/css/SeasonLoader.module.css'

const SeasonLoader = ({seasonCounter, onSeasonFilled}) => {
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

    useEffect(() => {
        onSeasonFilled(data)
    }, [data]) 

    return (
        <div className={styles.seasonLoader}>
            {Array(+seasonCounter).fill('').map((_, index) => (
                <div key={index} className={styles.seasonLoaderBox}>
                    <h2>{index + 1} сезон</h2>
                    <SeriesLoader onFilled={handleFilled} season={index + 1}/>
                    {
                        (index<seasonCounter-1)
                        ?(<div className={styles.grayLine}></div>)
                        :(<div></div>)
                    }
                </div>
            ))}
        </div>
    )
}

export default SeasonLoader