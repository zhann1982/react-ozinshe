import React, {useState} from "react";
import styles from "@css/GenresPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import GenreCard from "../components/GenreCard";
import { filterGenres } from "@services/filterArrays";
import ModalAddCategory from "../components/ModalAddCategory";

const GenresPage = () => {
  let genres = [...filterGenres]; // will be replaced with server response data

  const [isModalOpen2, setIsModalOpen2] = useState(false);
      
  const openModal2 = () => {
      setIsModalOpen2(true)
      console.log('openModal2')
  }
  const closeModal2 = () => {
      setIsModalOpen2(false);
  }

  const handleAddNewCategory = (e) => {
    e.preventDefault();
    openModal2();
  }

  const confirmedAddNewGenre = (genre) => {
    // Add logic to add category to list on server
    genres.push(genre)
    // filterCategory = [filterCategory[0], ...categories]
    closeModal2();
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
              Жанры
                <span className={styles.projectsCountNumber}>
                  {genres.length}
                </span>
              </h1>

              <button
                className={styles.buttonAdd}
                onClick={(e) => handleAddNewCategory(e)}
              >
                <PlusIcon width={24} height={24} />
                <p>Добавить</p>
              </button>
            </div>

            <div className={styles.cardBox}>
              {genres.map((genre, index) => {
                
                  return (
                    <GenreCard
                      key={index}
                      title={genre.genreName}
                      imageSrc={genre.image}
                    />
                  );
                
              })}
            </div>
          </section>
        </div>

        <ModalAddCategory title={'Добавить жанр'} isOpen={isModalOpen2} onClose={closeModal2} confirmAddGenre={confirmedAddNewGenre}/>

      </MainLayout>
    );
};

export default GenresPage;
