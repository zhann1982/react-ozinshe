import React, {useState} from "react";
import styles from "@css/CategoriesPage.module.css";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import PlusIcon from "@icons/PlusIcon";
import RoleCard from "../components/RoleCard";
import { filterRoles } from "@services/filterArrays";
import ModalAddRole from "../components/ModalAddRole";

const RolesPage = () => {
  let roles = [...filterRoles]; // will be replaced with server response data
  
  const rolesCount = roles.length; // will be replaced with server response data

  const [isModalOpen2, setIsModalOpen2] = useState(false);
      
  const openModal2 = () => {
      setIsModalOpen2(true)
      console.log('openModal2')
  }
  const closeModal2 = () => {
      setIsModalOpen2(false);
  }

  const handleAddNewRole = (e) => {
    e.preventDefault();
    openModal2();
  }

  const confirmedAddNewRole = (role) => {
    // Add logic to add role to list on server
    roles.push(role)
    // filterRoles = [filterRoles, ...roles]
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
              Роли
                <span className={styles.projectsCountNumber}>
                  {rolesCount}
                </span>
              </h1>

              <button
                className={styles.buttonAdd}
                onClick={(e) => handleAddNewRole(e)}
              >
                <PlusIcon width={24} height={24} />
                <p>Добавить</p>
              </button>
            </div>

            <div className={styles.cardBox}>
              {roles.map((role, index) => {
                
                  return (
                    <RoleCard
                      key={index}
                      roleObj={role}
                    />
                  );
                
              })}
            </div>
          </section>
        </div>

        <ModalAddRole title={'Добавить роль'} isOpen={isModalOpen2} onClose={closeModal2} confirmAddRole={confirmedAddNewRole}/>

      </MainLayout>
    );
};

export default RolesPage;
