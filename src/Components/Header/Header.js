import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <h1>To-do-List</h1>
    </div>
  );
};

export default Header;
