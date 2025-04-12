import React, {useState} from 'react'
import styles from '@css/ModalAddCategory.module.css'
import TimesIcon from '@icons/TimesIcon';
import InputText from '@components/InputText'
import DropDownSelect from '@components/DropDownSelect'

const ModalAddRole = ({ isOpen, onClose, confirmAddRole,title }) => {
    if (!isOpen) return null;

    const accesses = ['Только чтение','Редактирование','Полный доступ']
    const [role, setRole] = useState({
        roleName: 'Менеджер 3', 
        access: {
            projects: {
                edit: false,
                delete: false,
                view: false,
            },
            categories: {
                edit: false,
                delete: false,
                view: false,
            },
            users: {
                edit: false,
                delete: false,
                view: false,
            },
            roles: {
                edit: false,
                delete: false,
                view: false,
            }
        }   
    })
    

    const handleAddRole = (e) => {
        e.preventDefault()
        if (role) {
            console.log(role)
            confirmAddRole(role)
            setRole('')
            onClose()
        } else {
            alert('Пожалуйста, заполните все поля')
        }
    }

    const handleInput = (value) => setRole({role, roleName: value})

    const handleSelect1 = (value) => {
        if (value === 'Только чтение') {
            setRole({role, access: {...role.access, projects: {edit: false, delete: false, view: true}}})
        } else if (value === 'Редактирование') {
            setRole({role, access: {...role.access, projects: {edit: true, delete: false, view: true}}})
        } else if (value === 'Полный доступ') {
            setRole({role, access: {...role.access, projects: {edit: true, delete: true, view: true}}})
        }
        else {
            setRole({role, access: {...role.access, projects: {edit: false, delete: false, view: false}}})
        }
    }
    const handleSelect2 = (value) => {
        if (value === 'Только чтение') {
            setRole({role, access: {...role.access, categories: {edit: false, delete: false, view: true}}})
        } else if (value === 'Редактирование') {
            setRole({role, access: {...role.access, categories: {edit: true, delete: false, view: true}}})
        } else if (value === 'Полный доступ') {
            setRole({role, access: {...role.access, categories: {edit: true, delete: true, view: true}}})
        }
        else {
            setRole({role, access: {...role.access, categories: {edit: false, delete: false, view: false}}})
        }
    }
    const handleSelect3 = (value) => {
        if (value === 'Только чтение') {
            setRole({role, access: {...role.access, users: {edit: false, delete: false, view: true}}})
        } else if (value === 'Редактирование') {
            setRole({role, access: {...role.access, users: {edit: true, delete: false, view: true}}})
        } else if (value === 'Полный доступ') {
            setRole({role, access: {...role.access, users: {edit: true, delete: true, view: true}}})
        }
        else {
            setRole({role, access: {...role.access, users: {edit: false, delete: false, view: false}}})
        }
    }
    const handleSelect4 = (value) => {
        if (value === 'Только чтение') {
            setRole({role, access: {...role.access, roles: {edit: false, delete: false, view: true}}})
        } else if (value === 'Редактирование') {
            setRole({role, access: {...role.access, roles: {edit: true, delete: false, view: true}}})
        } else if (value === 'Полный доступ') {
            setRole({role, access: {...role.access, roles: {edit: true, delete: true, view: true}}})
        }
        else {
            setRole({role, access: {...role.access, roles: {edit: false, delete: false, view: false}}})
        }
    }
    

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.titleBox}>
                    <h2>{title}</h2>
                    <button onClick={onClose}>
                    <TimesIcon width={24} height={24}  />
                    </button>
                </div>

                <div className={styles.inputBox}>
                    <InputText title={'Наименование'} onSelected={handleInput} valueOfInput={role.roleName}/>
                    <DropDownSelect title={'Проекты'} options={accesses} onSelected={handleSelect1} valuePreselected={'Редактирование'}/>
                    <DropDownSelect title={'Категории'} options={accesses} onSelected={handleSelect2} valuePreselected={'Редактирование'}/>
                    <DropDownSelect title={'Пользователи'} options={accesses} onSelected={handleSelect3} valuePreselected={'Редактирование'}/>
                    <DropDownSelect title={'Роли'} options={accesses} onSelected={handleSelect4} valuePreselected={'Редактирование'}/>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.buttonYes} onClick={e=>handleAddRole(e)}>Добавить</button> 
                    <button className={styles.buttonCancel} onClick={onClose}>Отмена</button>   
                </div>    
                
            </div>
        </div>
    )
}

export default ModalAddRole