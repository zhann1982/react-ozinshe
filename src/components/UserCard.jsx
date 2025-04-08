import React from 'react'
import {useState} from 'react'
import styles from '@css/UsersCard.module.css'

const UsersCard = ({name, email}) => {
    const firstLetterOfName = name.charAt(0).toUpperCase()

    const [isModalOpen2, setIsModalOpen2] = useState(false);
  
    const openModal2 = (e) => {
        e.preventDefault()
        setIsModalOpen2(true)
        console.log('openModal2')
    }
    const closeModal2 = (e) => {
        e.preventDefault();
        setIsModalOpen2(false);
    }
  
    

  return (
    <div className={styles.card}>
        <div className={styles.iconsBox}>
            <span>{firstLetterOfName}</span>
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
    </div>
  )
}

export default UsersCard