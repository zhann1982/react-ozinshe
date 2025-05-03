import {useState, useEffect} from "react";
import styles from "@css/GenresPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import GenreCard from "../components/GenreCard";
import ModalAddGenre from "../components/ModalAddGenre";
import { fetchGenres } from "@services/server";
import axios from "axios";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  useEffect(() => {
    fetchGenres(setGenres);
  }, []);
      
  const openModal2 = () => {
      setIsModalOpen2(true)
      console.log('openModal2')
  }
  const closeModal2 = () => {
      setIsModalOpen2(false);
  }

  const handleAddNewGenre = (e) => {
    e.preventDefault();
    openModal2();
  }

  const confirmedAddNewGenre = async (genreObj) => {
    const formData = new FormData();
    formData.append('name', genreObj.genreName); // Assuming genreName is the name of the genre
    formData.append('image', genreObj.image); // Assuming image is the file object from the input
  
    try {
      const response = await axios.post('http://185.100.67.64/genre', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Accept': 'application/json',
        }
      });
      console.log('genre added' , response.data);
    } catch (error) {
      console.error('Error uploading:', error);
    }
    fetchGenres(setGenres);
    closeModal2();
  };

  const handleDeleteGenre = (GenreId) => {
    if (GenreId) {
      axios
        .delete(`http://185.100.67.64/genre/${GenreId}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          fetchGenres(setGenres);
        })
        .catch((error) => console.error("Error deleting:", error));
    }
  };

  const handleEditGenre = (ageCategoryId) => {
    // Implement edit functionality here
    console.log("Edit genre with ID:", ageCategoryId);
  };

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
                onClick={(e) => handleAddNewGenre(e)}
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
                    title={genre.name}
                    imageSrc={"randomGradient"}
                    ageCategoryId={genre.genreId}
                    deleteConfirmed={handleDeleteGenre}
                    editConfirmed={handleEditGenre}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <ModalAddGenre 
          title={'Добавить жанр'} 
          isOpen={isModalOpen2} 
          onClose={closeModal2} 
          confirmAddGenre={confirmedAddNewGenre}
        />

      </MainLayout>
    );
};

export default GenresPage;
