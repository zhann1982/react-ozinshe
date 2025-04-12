import React from 'react'
import {useState} from 'react'
import styles from '@css/Rolecard.module.css'
import EditIcon from '@icons/EditIcon'
import TrashIcon from '@icons/TrashIcon'
import VideoIcon from '@icons/VideoIcon'
import ModalDeleteProject2 from '@components/ModalDeleteProject2'
import { filterRoles } from '@services/filterArrays'
import CheckIcon from '../icons/CheckIcon'

const RoleCard = ({roleObj}) => {

    let roles = [...filterRoles]; // will be replaced with server response data
    
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
  
    const handleDeleteRole = (e) => {
        e.preventDefault()
        let newRoles = roles.filter(role => role.roleName !== roleObj.roleName)
        // filterRoles = [...newRoles]
        // add server request to delete category
        closeModal2(e)
    }

    const handleEditRole = (e) => {
        e.preventDefault()
        
    }

    const roleAccessStatus = (roleObjKey) => {
        if (roleObjKey.view === true && roleObjKey.edit === false && roleObjKey.delete === false) return 'Только чтение'
        if (roleObjKey.view === true && roleObjKey.edit === true && roleObjKey.delete === false) return 'Редактирование'
        if (roleObjKey.view === true && roleObjKey.edit === true && roleObjKey.delete === true) return 'Полный доступ'
        return 'Нет доступа'
    }

  return (
    <div className={styles.card}>
        
        <p className={styles.title}>{roleObj.roleName}</p>
        
        <div className={styles.actionBox}>
            <div className={styles.accessBox}>
                <p><CheckIcon />Проекты <span className={styles.secondaryText}>{`(${roleAccessStatus(roleObj.access.projects)})`}</span></p>
                <p><CheckIcon />Категории <span className={styles.secondaryText}>{`(${roleAccessStatus(roleObj.access.categories)})`}</span></p>
                <p><CheckIcon />Пользователи <span className={styles.secondaryText}>{`(${roleAccessStatus(roleObj.access.users)})`}</span></p>
            </div>
            <div className={styles.actions}>
                <button onClick={e => handleEditRole(e)}>
                    <EditIcon width={16} height={16} />
                </button>
                <button  onClick={e => openModal2(e)}>
                    <TrashIcon width={16} height={16} scalePath={0.85}/>
                </button>
            </div>
        </div>

        <ModalDeleteProject2 title={'Удалить роль?'} question={'Вы действительно хотите удалить роль?'} isOpen={isModalOpen2} onClose={closeModal2} confirmDeleteProject={handleDeleteRole}/>
    </div>
  )
}

export default RoleCard