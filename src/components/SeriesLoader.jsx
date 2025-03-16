import React, {useState} from 'react'
import styles from '../assets/css/SeriesLoader.module.css'
import TrashIcon from '../components/icons/TrashIcon'

const SeriesLoader = ({onFilled, season}) => {
    const [seriesCount, setSeriesCount] = useState(1);
    const [series, setSeries] = useState(['']);

    const handleAddClick = (e) => {
        e.preventDefault()
        setSeriesCount(seriesCount + 1);
        setSeries([...series, '']);
    }

    const handleInputChange = (e, index) => {

    }

    const handleDelete = (index) => {

    }
    
  return (
    <div className={styles.seriesLoader}>
        {Array(seriesCount).fill().map((_, index) => (
            <div key={index} className={styles.seriesLoaderItem}>
                <div key={index} className={styles.seriesInput}>
                    <input  
                        className={styles.inputEmpty} 
                        type="text" 
                        placeholder={`${index + 1} серия / Youtube Video ID `} 
                        onChange={(e, index) => handleInputChange(e, index)}
                    />
                    <button 
                        onClick={handleDelete(index)} 
                        className={styles.deleteButton}
                    >
                        <TrashIcon width={20} height={20} />
                    </button>
                    
                </div>
            </div>
        ))}
        <button 
                    onClick={(e)=>handleAddClick(e)} 
                    className={styles.addNewInputButton}
                >
                    Добавить серию
        </button>
    </div>
  )
}

export default SeriesLoader