import React, { useLayoutEffect, useState } from 'react'
import styles from '@css/SearchTabsPage.module.css'
import { filmCards } from '@services/filmCardBase'
import FilmCard from '@components/FilmCard'
import { filterCategory } from '../services/filterArrays'
import CategoryCard from '../components/CategoryCard'
import axios from 'axios'
import UserCard from '@components/UserCard'

const SearchTabsPage = ({ search }) => {
  // filterCategory.shift();
  const [foundCount, setFoundCount] = useState(0)
  const [tab, setTab] = useState(1)
  const [users, setUsers] = useState([])
  let style1 = (tab == 1) ? styles.activeLink : styles.navLink,
    style2 = (tab == 2) ? styles.activeLink : styles.navLink,
    style3 = (tab == 3) ? styles.activeLink : styles.navLink

  useLayoutEffect(() => {
    axios
      .get("https://www.freetestapi.com/api/v1/users") // API JSONPlaceholder
      .then((response) => {
        setUsers(response.data); // Обновляем состояние с полученными данными
      })
      .catch((error) => {
        console.log('Ошибка загрузки пользователей с сервера ', error)
      });
  }, []);

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
          <div className={style1} onClick={e => setTab(1)}>Проекты</div>
          <div className={style2} onClick={e => setTab(2)}>Категории</div>
          <div className={style3} onClick={e => setTab(3)}>Пользователи</div>
        </div>

        <div className={styles.cardBox}>
          {(tab == 1)
            ? <div className={styles.cardBox}>
              {filmCards
                .filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
                .map(film => (
                  <FilmCard
                    key={film.id}
                    id={film.id}
                    title={film.title}
                    category={film.category}
                    views={film.viewsCount}
                    seriesCount={film.lastSerieAdded}
                    imageSrc={`url(/src/assets/images/${film.thumbnail})`}
                  />
                ))}
            </div>
            : (tab == 2)
              ? <div className={styles.cardBox}>
                {filterCategory
                  .filter(category => category.toLowerCase().includes(search.toLowerCase()))
                  .map((category, index) => {
                    return (
                      <CategoryCard
                        key={index}
                        title={category}
                      />
                    );

                  })}
              </div>
              : <div className={styles.cardBox}>
                {users
                  .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
                  .map((user) => (
                    <div key={user.id} onClick={e => handleClick(e, user)}>
                      <UserCard name={user.name} email={user.email} />
                    </div>
                  ))}
              </div>}
        </div>
      </section>
    </div>
  )
}

export default SearchTabsPage
