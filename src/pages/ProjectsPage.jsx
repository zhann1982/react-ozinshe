import {useEffect,useState} from 'react'
import MainLayout from '@layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'
import axios from 'axios'
import styles from '@css/ProjectsPage.module.css'
import { 
  filterPopularity,
  filterYears 
} from '@services/filterArrays'
import { fetchMovies, fetchCategories, fetchGenres } from '@services/server'
import Plusicon from '@icons/PlusIcon'
import DropDown from '@components/DropDown'
import DropDownYear from '@components/DropDownYear'
import FilmCard from '@components/FilmCard'


const ProjectsPage = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetchMovies(setMovies)
    fetchCategories(setCategories)
    fetchGenres(setGenres)
  },[])

  const handleDeleteProject = (id) => {
    if (id) {
      axios
        .delete(`http://185.100.67.64/movies/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          fetchMovies(setMovies);
        })
        .catch((error) => console.error("Error deleting:", error));
    }
  }

  const handleSelect1 = (option) => {
    console.log(option)
  }
  const handleSelect2 = (option) => {
    console.log(option)
  }
  const handleSelect3 = (option) => {
    console.log(option)
  }

  const handleSelect4 = (option) => {
    console.log(option)
  }

  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Проекты
            <span className={styles.projectsCountNumber}>{movies.length}</span>
          </h1>
          
          <button
            className={styles.buttonAdd}
            onClick={()=>navigate('/add-project')}
          >
            <Plusicon width={24} height={24}/>
            <p>Добавить</p>
          </button>
        </div>
        <div className={styles.filterBox}>
          <DropDown title={`Сортировать:`} options={filterPopularity} onSelect={handleSelect1}/>  
          <DropDown title={`Категория:`} options={['Все категории', ...(categories.map(category=>category.name))]} onSelect={handleSelect2}/>  
          <DropDown title={`Тип:`} options={['Все жанры', ...(genres.map(genre=>genre.name))]} onSelect={handleSelect3}/> 
          <div className={styles.toRight}>
            <DropDownYear options={filterYears} onSelect={handleSelect4}/>  
          </div> 
        </div>
        <div className={styles.cardBox}>
          {movies.map((movie, index)=>(
              <FilmCard 
                key={index}
                id={movie.movieId}
                title={movie.title}
                category={movie.categories.map(category=>category.name).join(', ')}
                type={movie.genres.map(genre=>genre.name).join(', ')}
                views={movie.views}
                seriesCount={movie.seriesCount}
                imageSrc={`url(/src/assets/${movie.imageSrc})`}
                deleteConfirmed={handleDeleteProject}
              />
          ))}
        </div>
      </section>
    </div>
    </MainLayout>
  )
}

export default ProjectsPage