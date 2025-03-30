import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../App'
import styles from '../assets/css/SeriesLoader.module.css'
import TrashIcon from '../components/icons/TrashIcon'
import InputText from '../components/InputText'


const SeriesLoader = ({season}) => {
    const {editedProject, setEditedProject} = useContext(EditContext)

    const {newProject, setNewProject} = useContext(AppContext)
    const [series, setSeries] = useState(editedProject.seasons.find((item)=>item.seasonNumber == season));

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
        } else if (series.length = 1) {
            setSeries([''])
        }
    }

    useEffect(()=>{
        
        let arr = newProject.seasons.length>0?[...newProject.seasons]:[]
        let index = arr.findIndex(item => item.seasonNumber == season)
        if (index != -1) {
            arr[index] = {seasonNumber: season, series} 
        } else {
            arr.push({seasonNumber: season, series})
        }
        setNewProject({...newProject, seasons: arr})

    },[])
    
    useEffect(()=>{

        console.log('newProject 2', newProject)
        let arr = newProject.seasons.length>0?[...newProject.seasons]:[]
        let index = arr.findIndex(item => item.seasonNumber == season)
        if (index != -1) {
            arr[index] = {seasonNumber: season, series} 
        } else {
            arr.push({seasonNumber: season, series})
        }
        setNewProject({...newProject, seasons: arr})
    },[series])
    
    
  return (
    <div className={styles.seriesLoader}>
        
        {series.map((value, index) => (
            <div key={index} className={styles.seriesLoaderItem}>
                <div key={index} className={styles.seriesInput}>
                    
                    <div className={styles.inputBox}>
                        <InputText 
                            title={`${index + 1} серия / Youtube Video ID `} 
                            // valueOfInput={value}
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