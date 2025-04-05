import React from 'react'
import SeriesLoader from './SeriesLoader'
import styles from '@css/SeasonLoader.module.css'

const SeasonLoader = ({seasonCounter}) => {

    return (
        <div className={styles.seasonLoader}>
            {Array(+seasonCounter).fill('').map((_, index) => (
                <div key={index} className={styles.seasonLoaderBox}>
                    <h2>{index + 1} сезон</h2>
                    <SeriesLoader season={index + 1}/>
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