import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import Plusicon from "@icons/PlusIcon";
import styles from "@css/MainProjectsPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import FilmCardMain from "@components/FilmCardMain";
import ModalAddToMainProjects from "@components/ModalAddToMainProjects";
import { filmCards } from "@services/filmCardBase";

const MainProjectsPage = () => {
  const navigate = useNavigate();
  const projectsCount = 2; // will be replaced with server response data

  const [isModalOpen2, setIsModalOpen2] = useState(false);
    
  const openModal2 = () => {
      setIsModalOpen2(true)
      console.log('openModal2')
  }
  const closeModal2 = () => {
      setIsModalOpen2(false);
  }

  const handleAddToMainProjects = (e) => {
    e.preventDefault();
    openModal2(e);
  }

  const confirmedAddToMainProjects = (obj) => {
    // Add logic to add project to main projects page

    console.log('confirmedAddToMainProjects', obj)
    closeModal2();
    navigate('/main-projects')
  }


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
                onClick={(e) => handleAddToMainProjects(e)}
              >
                <Plusicon width={24} height={24} />
                <p>Добавить</p>
              </button>
            </div>

            <div className={styles.cardBox}>
              {filmCards.map((film) => {
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

        <ModalAddToMainProjects title={'Добавить проект на главную'} isOpen={isModalOpen2} onClose={closeModal2} confirmAddToMainProjects={confirmedAddToMainProjects}/>

      </MainLayout>
    );
};

export default MainProjectsPage;
