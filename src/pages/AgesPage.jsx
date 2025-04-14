import React, {useState} from "react";
import styles from "@css/AgesPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import GenreCard from "../components/GenreCard";
import { filterAgeCategories } from "@services/filterArrays";
import ModalAddAge from "../components/ModalAddAge";

const AgesPage = () => {
  let ages = [...filterAgeCategories]; // will be replaced with server response data

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

  const confirmedAddNewAge = (age) => {
    // Add logic to add category to list on server
    ages.push(age)
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
              {ages.map((age, index) => {
                
                  return (
                    <GenreCard
                      key={index}
                      title={age+' жас'}
                      imageSrc={'randomGradient'}
                    />
                  );
                
              })}
            </div>
          </section>
        </div>

        <ModalAddAge title={'Добавить возраст'} isOpen={isModalOpen2} onClose={closeModal2} confirmAddAge={confirmedAddNewAge}/>

      </MainLayout>
    );
};

export default AgesPage;
