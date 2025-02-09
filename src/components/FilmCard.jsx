import React from 'react'
import styles from '../assets/css/FilmCard.module.css'
import EditIcon from './icons/EditIcon'
import TrashIcon from './icons/TrashIcon'
import EyeIcon from './icons/EyeIcon'

const FilmCard = ({title, category, views, seriesCount, imageSrc}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imageBox} style={{backgroundImage: imageSrc}}>
            { seriesCount? <p className={styles.seriesCount}>{seriesCount} бөлім</p> : '' }
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.category}>{category}</p>
        <div className={styles.actionBox}>
            <div className={styles.views}>
                <EyeIcon width={16} height={16} />
                <p>{views}</p>
            </div>
            <div className={styles.actions}>
                <button>
                    <EditIcon width={16} height={16} />
                </button>
                <button>
                    <TrashIcon width={16} height={16} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default FilmCard