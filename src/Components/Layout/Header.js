import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BMPS React Food Application</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="BMPS React Food Image" />
      </div>
    </Fragment>
  );
};
export default Header;
