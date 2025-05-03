import styles from "@css/UsersCard.module.css";

const UsersCard = ({ name, email }) => {
  const firstLetterOfName = name.charAt(0).toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.iconsBox}>
        <span>{firstLetterOfName}</span>
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.email}>{email}</p>
    </div>
  );
};

export default UsersCard;
