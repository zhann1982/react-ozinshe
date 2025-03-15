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

  const handleSelectSeasonCount = (value) => {
    setSeasonCount(value);
  };

  const handleInfo = (obj) => {
    console.log(obj);
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

          <form className={styles.formContainer}>
            <div className={styles.formHeader}>
              <button
                className={styles.backButton}
                onClick={() => navigate("/projects")}
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
              />
            </div>
            
            {seasonCount > 0 ? (
              <SeasonLoader seasonCount={seasonCount} onSeasonFilled={handleInfo}/>
            ) : (
              <div className="seasonLoaderBoxEmpty">
                <p>Выберите количество сезонов</p>
              </div>
            )}

            <div className={styles.actionButtons}>
              <button>Назад</button>
              <button>Далее</button>
              <button>Отмена</button>
            </div>
            
          </form>


        </div>
      </div>
    </MainLayout>
  );
};

export default AddProjectPage_2;
