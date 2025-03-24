import React, {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "../assets/css/AddProjectPage_2.module.css";
import { Link, useNavigate } from "react-router-dom";
import ChevronRight from "../components/icons/ChevronRight";
import BackArrowIcon from "../components/icons/BackArrowIcon";
import DropDownSelect from "../components/DropDownSelect";
import SeasonLoader from "../components/SeasonLoader";

const AddProjectPage_2 = () => {
  const navigate = useNavigate();
  const [seasonCount, setSeasonCount] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  const [data, setData] = useState([]); // data from SeasonLoader

  const handleSelectSeasonCount = (value) => {
    setSeasonCount(value);
  };

  const handleInfo = (obj) => {
    let allFilled = []
    obj.forEach((item) => {
      const allSeries = item.series.every((videoId) => (videoId !== null && videoId !== ""));
      allFilled.push(allSeries);
    });
    allFilled = allFilled.every((item) => item === true);
    setActiveButton(allFilled);
    setData(obj);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", data);
    navigate("/add-project-3");
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
                options={[1, 2, 3, 4, 5, 6, 7, 8]}
                onSelected={handleSelectSeasonCount}
                valuePreselected={seasonCount}
              />
            </div>
            
            {seasonCount > 0 ? (
              <SeasonLoader seasonCounter={seasonCount} onSeasonFilled={handleInfo}/>
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
