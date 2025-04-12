import React, {useState} from "react";
import styles from "@css/CategoriesPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import CategoryCard from "../components/CategoryCard";
import { filterCategory } from "@services/filterArrays";
import ModalAddCategory from "../components/ModalAddCategory";

const CategoriesPage = () => {
  let categories = [...filterCategory]; // will be replaced with server response data
  categories.shift()
  const categoriesCount = categories.length; // will be replaced with server response data

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

  const confirmedAddNewCategory = (category) => {
    // Add logic to add category to list on server
    categories.push(category)
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
              Категории
                <span className={styles.projectsCountNumber}>
                  {categoriesCount}
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
              {categories.map((category, index) => {
                
                  return (
                    <CategoryCard
                      key={index}
                      title={category}
                    />
                  );
                
              })}
            </div>
          </section>
        </div>

        <ModalAddCategory title={'Добавить категорию'} isOpen={isModalOpen2} onClose={closeModal2} confirmAddCategory={confirmedAddNewCategory}/>

      </MainLayout>
    );
};

export default CategoriesPage;
