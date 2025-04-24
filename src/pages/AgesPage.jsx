import React, { useEffect, useState } from "react";
import styles from "@css/AgesPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import GenreCard from "@components/GenreCard";
import ModalAddAge from "@components/ModalAddAge";
import axios from "axios";
import { fetchAges } from "@services/server";


const AgesPage = () => {
  const [ages, setAges] = useState([]);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  useEffect(() => {
    fetchAges(setAges);
  }, []);

  const confirmedAddNewAge = (obj) => {
    const formData = new FormData();
    formData.append("name", obj.ageName);
    formData.append("image", obj.image); // `file` should be a File object from an input field
    axios
      .post("http://185.100.67.64/age-category", formData, {
        headers: {
          Accept: "application/json",
          "Content-Disposition": `form-data; name="file"; filename="${obj.image.name}"`,
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data)
        fetchAges(setAges);
      })
      .catch((error) => console.error(error));
    closeModal2();
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleAddNewCategory = (e) => {
    e.preventDefault();
    openModal2();
  };

  const handleDeleteAge = (ageCategoryId) => {
    if (ageCategoryId) {
      axios
        .delete(`http://185.100.67.64/age-category/${ageCategoryId}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          fetchAges(setAges);
        })
        .catch((error) => console.error("Error deleting:", error));
    }
  };

  const handleEditGenre = (ageCategoryId) => {

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
                Возрасты
                <span className={styles.projectsCountNumber}>
                  {ages.length}
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
              {ages.sort((a, b) => a.name - b.name).map((age, index) => {
                return (
                  <GenreCard
                    key={index}
                    title={age.name + " жас"}
                    imageSrc={"randomGradient"}
                    ageCategoryId={age.ageCategoryId}
                    deleteConfirmed={handleDeleteAge}
                    editConfirmed={handleEditGenre}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <ModalAddAge
          title={"Добавить возраст"}
          isOpen={isModalOpen2}
          onClose={closeModal2}
          confirmAddAge={confirmedAddNewAge}
        />

      </MainLayout>
    );
};

export default AgesPage;
