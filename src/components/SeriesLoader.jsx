import React, {useState, useEffect} from 'react'
import styles from '../assets/css/SeriesLoader.module.css'
import TrashIcon from '../components/icons/TrashIcon'
import InputText from '../components/InputText'

const SeriesLoader = ({onFilled, season}) => {
    const [series, setSeries] = useState(['']);

    const handleAddClick = (e) => {
        e.preventDefault()
        setSeries([...series, '']);
    }

    const handleInputChange = (value, index) => {
        let arr = [...series]
        arr[index] = value
        setSeries([...arr]) 
    }

    const handleDelete = (e, index) => {
        e.preventDefault()
        if (series.length > 1) {
            let arr = [...series]
            arr.splice(index, 1)
            setSeries([...arr])
        } else if (series.length == 1) {
            setSeries([''])
        }
    }

    useEffect(()=>{
        onFilled({seasonNumber: season, series})
    },[series])
    
    
  return (
    <div className={styles.seriesLoader}>
        {series.map((value, index) => (
            <div key={index} className={styles.seriesLoaderItem}>
                <div key={index} className={styles.seriesInput}>
                    
                    <div className={styles.inputBox}>
                        <InputText 
                            title={`${index + 1} серия / Youtube Video ID `} 
                            valueOfInput={value}
                            onSelected={handleInputChange} 
                            indexOfInput={index}
                        />
                    </div>
                    
                    <button 
                        onClick={(e)=>handleDelete(e, index)} 
                        className={styles.deleteButton}
                    >
                        <TrashIcon width={20} height={20} />
                    </button>
                    
                </div>

                {
                    (value.length>0)
                    ?(
                    <div className={styles.frameBox}>
                        <iframe 
                            src={`https://www.youtube.com/embed/${value}`} 
                            title="YouTube video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        > 
                        </iframe>                        
                    </div>)
                    :(<div></div>)
                }
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