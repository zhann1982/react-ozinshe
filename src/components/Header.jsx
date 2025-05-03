import {useState} from 'react'
import styles from '@css/Header.module.css'
import LogoImageSVG from '@icons/LogoImageSVG'
import SearchIcon from '@icons/SearchIcon'
import ExitIcon from '@icons/ExitIcon'
import CrossIcon from '@icons/CrossIcon'
import { useNavigate } from 'react-router-dom'

const Header = ({searchInput}) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    searchInput(e.target.value)
  }
  const handleExit = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  const handleClickOnCross = () => {
    setSearch('')
    searchInput('')
  }
  return (
    <section className={styles.header}>
      <div className={styles.logoBox}>  
          <LogoImageSVG />
      </div>
      <div className={styles.inputBox}>
        <input 
          value={search}
          onFocus={() => setSearch(search)}
          onBlur={() => setSearch(search)}
          className={styles.input} 
          type="text" 
          placeholder='Поиск' 
          onChange={e=>handleSearch(e)}
        />
        {search.length > 0 
        ?<div onClick={handleClickOnCross}><CrossIcon /></div>
        :<SearchIcon width={24} height={24}/>}
      </div>
      <div className={styles.routerLink} onClick={handleExit}>Выйти
        <div className={styles.exitBox}>
          <ExitIcon width={24} height={24}/>
        </div>
      </div>
    </section>
  )
}

export default Header