import React from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "../assets/css/AddProjectPage_2.module.css";
import { Link, useNavigate } from "react-router-dom";
import ChevronRight from "../components/icons/ChevronRight";
import BackArrowIcon from "../components/icons/BackArrowIcon";

const AddProjectPage_2 = () => {
    const navigate = useNavigate();
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

          </form>

        </div>
      </div>
    </MainLayout>
  );
};

export default AddProjectPage_2;
