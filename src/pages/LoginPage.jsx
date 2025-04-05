import styles from '@css/LoginPage.module.css'
import React, {useState} from 'react'
import MainIcon from '@components/icons/MainIcon'
import EyeIcon from '@components/icons/EyeIcon'
import EyeIconHidden from '@components/icons/EyeIconHidden'
import { useNavigate } from 'react-router-dom'
import { admins } from '@services/fakeAuth'

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleMouseDown = () => setPasswordVisible(true)
    const handleMouseUp = () => setPasswordVisible(false)

    // useEffect(() => {
    //     localStorage.removeItem('token')
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const admin = admins.find((admin) => admin.email === email)
        if (admin && admin.password === password) {
            localStorage.setItem('token', JSON.stringify(admin.token))
            navigate('/projects')
        } else {
            alert('Неверный логин или пароль')
        }   
    }   

     return (
        <div className={styles.formOverlay}>
           
            <MainIcon width={80} height={80} />
           
            <form className={styles.formBox} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Добро пожаловать</h2>
                <p className={styles.info}>Войдите в систему, чтобы продолжить</p>
                <input 
                    className={styles.inputEmail} 
                    type="email" 
                    placeholder='Email'
                    autoComplete = 'off'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.inputPasswordBox}>
                    <input 
                        className={styles.inputPassword} 
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Пароль'
                        autoComplete = 'off'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div 
                        className={styles.eyeIconBox} 
                        onMouseDown={handleMouseDown} 
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {passwordVisible ? 
                            <EyeIconHidden width={24} height={24}/>:
                            <EyeIcon width={24} height={24}/>
                        }
                    </div>
                </div>
                
                <button 
                    className={styles.buttonSubmit}
                    type='submit'
                >
                    Войти
                </button>
                <p className={styles.resetInfo}>Забыли пароль?
                    <a className={styles.reserLink} href="#">Восстановить</a>
                </p>
            </form>
        </div>
    
    )
}

export default LoginPage