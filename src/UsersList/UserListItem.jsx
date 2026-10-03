import styles from "./usersList.module.css";

const UserListItem = ({ user, onSelect, onDelete }) => {
  return (
    <article
      className={`${styles["user-all"]} ${user.isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(user.id)}
    >
      <div className={styles.user}>
        <img
          className={styles[["user-pfp"]]}
          src={`${user.imgSrc}`}
          alt="User pfp"
        />
        <div>
          <div className={styles["name-and-age"]}>
            <h3 className={styles["char-name"]}>{user.firstName}</h3>
            <p className={styles.age}>{user.age} y.o.</p>
          </div>

          <p className={styles.username}>@{user.username}</p>
        </div>
      </div>
      <button
        className={styles["delete-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(user.id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default UserListItem;
