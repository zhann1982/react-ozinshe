import {useLayoutEffect, useState} from "react";
import styles from "@css/CategoriesPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import CategoryCard from "../components/CategoryCard";
import ModalAddCategory from "../components/ModalAddCategory";
import { fetchCategories } from "../services/server";
import axios from "axios";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  useLayoutEffect(() => {
    fetchCategories(setCategories)
  },[])
      
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

  const confirmedAddNewCategory = async (category) => {   
    try {
      const response = await axios.post('http://185.100.67.64/category', {
        name: category
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Accept': 'application/json',
        }
      });
      console.log('category added' , response.data);
    } catch (error) {
      console.error('Error uploading:', error);
    }
    fetchCategories(setCategories)
    closeModal2();
  };

  const handleDeleteCategory = async (categoryId) => {
    if (categoryId) {
      axios
        .delete(`http://185.100.67.64/category/${categoryId}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          fetchCategories(setCategories)
        })
        .catch((error) => console.error("Error deleting:", error));
    }
  }

  const handleEditCategory = async (categoryId) => {
    console.log('edit category', categoryId)
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
                  {categories.length}
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
                      title={category.name}
                      categoryId={category.categoryId}
                      deleteConfirmed={handleDeleteCategory}
                      editConfirmed={handleEditCategory}
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
