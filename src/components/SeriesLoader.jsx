import {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../App'
import styles from '@css/SeriesLoader.module.css'
import TrashIcon from '@icons/TrashIcon'
import InputText from '@components/InputText'


const SeriesLoader = ({season}) => {
    const location = useLocation()
    const {newProject, setNewProject, editedProject, setEditedProject} = useContext(AppContext)

    let obj
    if (location.pathname.includes('edit-project')) {
        obj = editedProject?.seasons.find((item)=>item.seasonNumber == season)
    }
    
    const [series, setSeries] = useState(obj?obj.series:['']);

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
        if (location.pathname.includes('edit-project')) {
            let arr = editedProject.seasons.length>0?[...editedProject.seasons]:[]
            let index = arr.findIndex(item => item.seasonNumber == season)
            if (index != -1) {
                arr[index] = {seasonNumber: season, series} 
            } else {
             arr.push({seasonNumber: season, series})
            }
            setEditedProject({...editedProject, seasons: arr})
        } else if (location.pathname.includes('add-project')) {
            let arr = newProject.seasons.length>0?[...newProject.seasons]:[]
            let index = arr.findIndex(item => item.seasonNumber == season)
            if (index != -1) {
                arr[index] = {seasonNumber: season, series} 
            } else {
                arr.push({seasonNumber: season, series})
            }
            setNewProject({...newProject, seasons: arr})
        }
    },[])
    
    useEffect(()=>{
        if (location.pathname.includes('edit-project')) {
            let arr = editedProject.seasons.length>0?[...editedProject.seasons]:[]
            let index = arr.findIndex(item => item.seasonNumber == season)
            if (index != -1) {
                arr[index] = {seasonNumber: season, series} 
            } else {
             arr.push({seasonNumber: season, series})
            }
            setEditedProject({...editedProject, seasons: arr})
        } else if (location.pathname.includes('add-project')) {
            let arr = newProject.seasons.length>0?[...newProject.seasons]:[]
            let index = arr.findIndex(item => item.seasonNumber == season)
            if (index != -1) {
                arr[index] = {seasonNumber: season, series} 
            } else {
                arr.push({seasonNumber: season, series})
            }
            setNewProject({...newProject, seasons: arr})
        }
        console.log(series)
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