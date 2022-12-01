import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of crappy food!" />
      </div>
    </Fragment>
  );
};

export default Header;
