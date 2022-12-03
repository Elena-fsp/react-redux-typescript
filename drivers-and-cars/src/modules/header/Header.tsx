import React, { FC } from 'react';
import styles from "./Header.module.scss"
import {ReactComponent as Logo} from "../../assets/images/Logo.svg"
import Menu from '../menu/Menu';




const Header: FC = () => (
  <header>
    <div className={styles.wrapper}>
    <Logo />
    <Menu />

    </div>
  </header>
);

export default Header;