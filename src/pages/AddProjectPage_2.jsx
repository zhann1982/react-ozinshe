import {useState, useLayoutEffect, useContext} from 'react'
import MainLayout from "@layouts/MainLayout";
import styles from "@css/AddProjectPage_2.module.css";
import { Link, useNavigate } from "react-router-dom";
import ChevronRight from "@icons/ChevronRight";
import BackArrowIcon from "@icons/BackArrowIcon";
import DropDownSelect from "@components/DropDownSelect";
import SeasonLoader from "@components/SeasonLoader";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import { AppContext } from "../App";
import axios from "axios";
import { fetchMovies } from "@services/server";

const AddProjectPage_2 = () => {
  const { newMovieTitle } = useContext(AppContext);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [seasonCount, setSeasonCount] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  const [seasonsObj, setSeasonsObj] = useState([]);
  const [id, setId] = useState(null);
  // const [data, setData] = useState([]); // data from SeasonLoader
  useLayoutEffect(() => {
    fetchMovies(setMovies)
  },[])
  useLayoutEffect(() => {
    movies.forEach((movie) => {
      if (movie.title === newMovieTitle) {
        setId(movie.movieId);
      }
    })
  },[movies])

  const handleSelectSeasonCount = (value) => {
    setSeasonCount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveButton(false);

    const sendRequestsToPostSeasons = async () => {
      try {
        const results = await Promise.all(
          seasonsObj.map(async (seoson, ii) => {
            return Promise.all(
              seoson.series.map(async (serie, jj) => {

                const data = new FormData();
                data.append("link", serie);
                const response = await axios.post(`http://185.100.67.64/movies/${id}/season/${ii}/series/${jj}/${serie}`, data, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    Accept: "application/json",
                  },
                });
                return response.data;
              })
            );
          })
        );
    
        console.log(results);
      } catch (error) {
        console.error("Error sending requests:", error);
      }
    };
    
    sendRequestsToPostSeasons();

    if (activeButton) navigate("/add-project-3");
  }

  // useEffect(() => { 
  //   let allFilled = []
  //   newProject.seasons.forEach((item) => {
  //     const allSeries = item.series.every((videoId) => (videoId !== null && videoId !== ""));
  //     allFilled.push(allSeries);
  //   });
  //   allFilled = allFilled.every((item) => item === true);
  //   setActiveButton(allFilled);
  // }, [seasonCount]);

  const handleAddedSeasons = (seasons, isAllFilled) => {
    setActiveButton(isAllFilled);
    setSeasonsObj(seasons);
  }

  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  }

  return (
    <MainLayout>
      <div className={styles.whiteBG}>
        <div className={styles.container}>
          <div className={styles.pagePath}>
            <Link to={"/projects"}>Проекты</Link>
            <ChevronRight width={16} height={16} />
            <p>Добавить проект</p>
          </div>

          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <button
                className={styles.backButton}
                onClick={(e) => {e.preventDefault(); navigate("/add-project")}}
              >
                <BackArrowIcon width={20} height={20} />
              </button>
              <h1>Видео</h1>
            </div>

            <div className={styles.dropdownContainer}>
              <DropDownSelect
                title={"Количество сезонов"}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                onSelected={handleSelectSeasonCount}
                valuePreselected={seasonCount}
              />
            </div>
            
            {seasonCount > 0 ? (
              <SeasonLoader seasonCounter={seasonCount} addedSeasons={handleAddedSeasons} />
            ) : (
              <div className={styles.hintTextVisible}>
                <p>Выберите количество сезонов</p>
              </div>
            )}

            <div className={styles.actionButtons}>
              <button className={styles.backButton2} onClick={()=>navigate(-1)}>Назад</button>
              <button type='submit' className={activeButton?styles.activated:styles.disabled}>Далее</button>
              <button className={styles.cancelButton} onClick={()=>navigate('/projects')}>Отмена</button>
            </div>
            
          </form>


        </div>
      </div>
    </MainLayout>
  );
};

export default AddProjectPage_2;
