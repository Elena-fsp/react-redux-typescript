import styles from "./Menu.module.scss";

const Menu = () => {
 
  return (
    <nav className={styles.menu__body}>
      <ul>
        <li className={styles.menu__list}><a href="#" className={styles.menu__link}>Водители</a></li>
        <li className={styles.menu__list}><a href="#" className={styles.menu__link}>Автомобили</a></li>
      </ul>
    </nav>
  );
};

export default Menu;