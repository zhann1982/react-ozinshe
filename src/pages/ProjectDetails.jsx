import React from 'react'
import styles from '../assets/css/ProjectDetails.module.css'
import MainLayout from '../layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import { filmCards } from '../sevices/filmCardBase'
import ChevronRight from '../components/icons/ChevronRight'
import EyeIcon from '../components/icons/EyeIcon'
import StarIcon from '../components/icons/StarIcon'
import ExportIcon from '../components/icons/ExportIcon'
import TrashIcon from '../components/icons/TrashIcon'
import PlayButtonIcon from '../components/icons/PlayButtonIcon'
import SeasonsSection from '../components/SeasonsSection'
import FilmSection from '../components/FilmSection'

const ProjectDetails = () => {
  const params = useParams();
  const project = filmCards.find(item => item.id == params.id)

  return (
    <MainLayout>
      <section className={styles.section}>
        <div className={styles.main}>
          <div className={styles.pagePath}>
            <Link to={'/projects'}>Проекты</Link>
            <ChevronRight width={16} height={16} />
            <p>{project.title}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.headerActionBox}>
              <div className={styles.headerBox}>
                <h1>{project.title}</h1>
                <div className={styles.stats}>
                  <div className={styles.group}>
                    <EyeIcon width={16} height={16} />
                    <p>{project.viewsCount}</p>
                  </div>
                  <div className={styles.group}>
                    <StarIcon width={16} height={16} />
                    <p>{project.chosenFavoriteCount}</p>
                  </div>
                  <div className={styles.group}>
                    <ExportIcon width={16} height={16} />
                    <p>{project.downloadCount}</p>
                  </div>
                </div>
              </div>
              <div className={styles.ActionBox}>
                <button>Редактировать</button>
                <div className={styles.deleteBox}>
                  <TrashIcon width={16} height={16} viewBox={'0 0 16 16'}/>
                </div>
              </div>
            </div>
            <div className={styles.frameBox} >
              <div className={styles.playButtonPlaceholder}>
                <PlayButtonIcon width={30} height={36} />
              </div>
              <iframe src="#"></iframe>
            </div>
            {(project.seasons.length == 0)
            ?  <FilmSection project={project} />
            :  <SeasonsSection project={project} />}
          </div>
        </div> 
        <div className={styles.aside}>
          
        </div>      
      </section>
    </MainLayout>
  )
}

export default ProjectDetails