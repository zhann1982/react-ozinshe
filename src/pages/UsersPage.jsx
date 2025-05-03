import { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "@layouts/MainLayout";
import { isAdminLoggedIn } from "@services/isAdminLoggedIn";
import NoAdminLoggedIn from "@components/NoAdminLoggedIn";
import styles from "@css/UsersPage.module.css";
import { filterUsers } from "@services/filterArrays";
import DropDown from "@components/DropDown";
import UsersCard from "@components/UserCard";
import ModalShowUser from "@components/ModalShowUser";

const UsersPage = () => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [user, setUser] = useState(null); 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openModal2 = () => {
    setIsModalOpen2(true);
    console.log("openModal2");
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/users") // API JSONPlaceholder
      .then((response) => {
        setUsers(response.data); // Обновляем состояние с полученными данными
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка при загрузке данных" + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  const handleSelectDropDown = (value) => {
    console.log(value);
    // Здесь вы можете обработать выбранное значение из выпадающего списка
  };

  const handleClick = (e,user) => {
    e.preventDefault();
    setUser(user);
    openModal2();
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
                Пользователи
                <span className={styles.usersCountNumber}>{users.length}</span>
              </h1>
            </div>

            <div className={styles.filterBox}>
              <DropDown
                title={"Сортировать по"}
                options={filterUsers}
                onSelect={handleSelectDropDown}
              />
            </div>

            <div className={styles.cardBox}>
              {users.map((user) => (
                <div key={user.id} onClick={e=>handleClick(e,user)}>
                  <UsersCard name={user.firstname + ' ' + user.lastname} email={user.email} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <ModalShowUser
          title={"Данные пользователя"}
          user={user}
          isOpen={isModalOpen2}
          onClose={closeModal2}
        />
      </MainLayout>
    );
};

export default UsersPage;
