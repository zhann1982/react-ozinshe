import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import styles from '@css/SearchTabsPage.module.css'
import FilmCard from '@components/FilmCard'
import CategoryCard from '../components/CategoryCard'
import axios from 'axios'
import UserCard from '@components/UserCard'
import { fetchMovies, fetchCategories } from '@services/server'
import ModalShowUser from '@components/ModalShowUser'

const SearchTabsPage = ({ search }) => {
  const containerRef = useRef(null);
  const [foundCount, setFoundCount] = useState(0)
  const [tab, setTab] = useState(1)
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState([])
  let style1 = (tab == 1) ? styles.activeLink : styles.navLink,
    style2 = (tab == 2) ? styles.activeLink : styles.navLink,
    style3 = (tab == 3) ? styles.activeLink : styles.navLink

  const openModal2 = () => {
    setIsModalOpen2(true);
    console.log("openModal2");
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  useLayoutEffect(() => {
    fetchMovies(setMovies)
    fetchCategories(setCategories)
    axios
      .get("https://jsonplaceholder.org/users") // API JSONPlaceholder
      .then((response) => {
        setUsers(response.data); // Обновляем состояние с полученными данными
      })
      .catch((error) => {
        console.log('Ошибка загрузки пользователей с сервера ', error)
      });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef.current.children.length)
      setFoundCount(containerRef.current.children.length); // Count its children
    }
  }, [tab]);

  const handleClick = (e,user) => {
    e.preventDefault();
    setUser(user);
    openModal2();
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Результаты поиска
            <span className={styles.foundCount}>
              {foundCount}
            </span>
          </h1>
        </div>
        <div className={styles.tabsNavbar}>
          <div className={style1} onClick={() => setTab(1)}>Проекты</div>
          <div className={style2} onClick={() => setTab(2)}>Категории</div>
          <div className={style3} onClick={() => setTab(3)}>Пользователи</div>
        </div>

        <div >
          {(tab == 1)
            ? <div ref={containerRef} className={styles.cardBox}>
              {movies
                .filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
                .map((film,index) => (
                  <FilmCard
                    key={index}
                    id={film.movieId}
                    title={film.title}
                    category={film.categories.map(category=>category.name).join(', ')}
                    views={film.views}
                    seriesCount={film.seriesCount}
                    imageSrc={`url(/src/assets/${film.imageSrc})`}
                  />
                ))}
            </div>
            : (tab == 2)
              ? <div ref={containerRef} className={styles.cardBox}>
                {categories
                  .filter(category => category.name.toLowerCase().includes(search.toLowerCase()))
                  .map((category, index) => {
                    return (
                      <CategoryCard
                        key={index}
                        title={category.name}
                      />
                    );

                  })}
              </div>
              : <div ref={containerRef} className={styles.cardBox}>
                {users
                  .filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(search.toLowerCase()))
                  .map((user) => (
                    <div key={user.id} onClick={e => handleClick(e, user)}>
                      <UserCard name={user.firstname + ' ' + user.lastname} email={user.email} />
                    </div>
                  ))}
              </div>}
        </div>
      </section>

      <ModalShowUser
        title={"Данные пользователя"}
        user={user}
        isOpen={isModalOpen2}
        onClose={closeModal2}
      />
    </div>
  )
}

export default SearchTabsPage
