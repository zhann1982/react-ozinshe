import React from "react";
import { useNavigate } from "react-router-dom";
import Plusicon from "@components/icons/PlusIcon";
import styles from "@css/MainProjectsPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import FilmCardMain from "@components/FilmCardMain";
import { filmCards } from "@services/filmCardBase";

const MainProjectsPage = () => {
  const navigate = useNavigate();
  const projectsCount = 2; // will be replaced with server response data
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />;
  } else
    return (
      <MainLayout>
        <div className={styles.wrapper}>
          <section className={styles.section}>
            <div className={styles.titleBox}>
              <h1 className={styles.title}>
                Проекты на главной
                <span className={styles.projectsCountNumber}>
                  {projectsCount}
                </span>
              </h1>

              <button
                className={styles.buttonAdd}
                onClick={() => navigate("/add-project")}
              >
                <Plusicon width={24} height={24} />
                <p>Добавить</p>
              </button>
            </div>

            <div className={styles.cardBox}>
              {filmCards.map((film,index) => {
                if (film.isOnMainPage) {
                  return <FilmCardMain
                    key={film.id}
                    placeCount={film.placeCountOnMainPage}
                    id={film.id}
                    title={film.title}
                    type={film.type}
                    category={film.category}
                    imageSrc={`url(/src/assets/images/${film.thumbnail})`}
                  />
                }
              })}
            </div>
          </section>
        </div>
      </MainLayout>
    );
};

export default MainProjectsPage;
