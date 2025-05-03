import { useContext, useState } from 'react'
import styles from '@css/VideosTab.module.css'
import DropDownSelect from './DropDownSelect'
import SeasonLoader from './SeasonLoader'
import { AppContext } from '../App'


const VideosTabs = () => {
  const {editedProject, setEditedProject} = useContext(AppContext)
  const [seasonCount, setSeasonCount] = useState(editedProject.seasons?.length??0)

  const handleSelectSeasonCount = (value) => {
    setSeasonCount(value)
    if (editedProject.seasons.length>value) {
      let arr = [...editedProject.seasons]
      arr.splice(value)
      setEditedProject({...editedProject, seasons: arr})
    }
  }
  return (
    <>
    
      <div className={styles.dropdownContainer}>
        <DropDownSelect
          title={"Количество сезонов"}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          onSelected={handleSelectSeasonCount}
          valuePreselected={seasonCount}
        />
      </div>
      
      {seasonCount > 0 ? (
        <SeasonLoader seasonCounter={seasonCount} />
      ) : (
        <div className={styles.hintTextVisible}>
          <p>Выберите количество сезонов</p>
        </div>
      )}
    </>
  )
}

export default VideosTabs