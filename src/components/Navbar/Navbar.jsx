import React, { useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import { drop, logo } from "../../utils/reExport";

const Navbar = () => {
  const inputCity = useRef(null);
  const [city, setCity] = useState("");

  const inputHandler = () => {
    setCity(inputCity.current.value);
  };
  return (
    <>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="" />
          <span className={styles.logo__span}>React weather</span>
        </a>
        <div className={styles.nav__search}>
          <img src={drop} alt="" style={{ cursor: "pointer" }} />
          <form className={styles.nav__search_form}>
            <input
              type="text"
              className={styles.nav__search_form_input}
              placeholder="Выбрать город"
              ref={inputCity}
              onChange={() => inputHandler()}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
