import SeriesLoader from './SeriesLoader'
import styles from '@css/SeasonLoader.module.css'
import {useEffect, useState} from 'react'

const SeasonLoader = ({seasonCounter, addedSeasons}) => {
    const [seasons, setSeasons] = useState([])

    const handleAddedSeries = (seasonNumber, series) => {
        let arr = [...seasons]
        let index = arr.findIndex(item => item.seasonNumber == seasonNumber)
        if (index != -1) {
            arr[index] = {seasonNumber: seasonNumber, series} 
        } else {
            arr.push({seasonNumber: seasonNumber, series})
        }
        setSeasons([...arr])
    }

    useEffect(()=>{
        let isAllFilled = true
        seasons.forEach((season) => {
            if (season.series.some(item => item === "")) {
                isAllFilled = false
            }
        })
        addedSeasons(seasons, isAllFilled)
        console.log('seasons', seasons)
    },[seasons])

    return (
        <div className={styles.seasonLoader}>
            {Array(+seasonCounter).fill('').map((_, index) => (
                <div key={index} className={styles.seasonLoaderBox}>
                    <h2>{index + 1} сезон</h2>
                    <SeriesLoader seasonNumber={index + 1} addedSeries={handleAddedSeries} />
                    {
                        (index < seasonCounter-1)
                        ?(<div className={styles.grayLine}></div>)
                        :(<div></div>)
                    }
                </div>
            ))}
        </div>
    )
}

export default SeasonLoader