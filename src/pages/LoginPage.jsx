import styles from "@css/LoginPage.module.css";
import React, { useState } from "react";
import MainIcon from "@icons/MainIcon";
import EyeIcon from "@icons/EyeIcon";
import EyeIconHidden from "@icons/EyeIconHidden";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleMouseDown = () => setPasswordVisible(true);
  const handleMouseUp = () => setPasswordVisible(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://185.100.67.64/auth/signin", {
        email,
        password,
      },
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      localStorage.setItem("token", response.data.result); // Сохраняем токен в localStorage
      console.log(response.data.result);
      setEmail("");
      setPassword("");
      setError(null);
      navigate('/projects'); // Перенаправляем на страницу проектов
    } catch (err) {
      setError("Ошибка авторизации. Проверьте данные!");
    }
  };

  return (
    <div className={styles.formOverlay}>
      <MainIcon width={80} height={80} />

      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Добро пожаловать</h2>
        <p className={styles.info}>Войдите в систему, чтобы продолжить</p>
        <input
          className={styles.inputEmail}
          type="email"
          placeholder="Email"
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.inputPasswordBox}>
          <input
            className={styles.inputPassword}
            type={passwordVisible ? "text" : "password"}
            placeholder="Пароль"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={styles.eyeIconBox}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {passwordVisible ? (
              <EyeIconHidden width={24} height={24} />
            ) : (
              <EyeIcon width={24} height={24} />
            )}
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.buttonSubmit} type="submit">
          Войти
        </button>
        <p className={styles.resetInfo}>
          Забыли пароль?
          <a className={styles.reserLink} href="#">
            Восстановить
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
