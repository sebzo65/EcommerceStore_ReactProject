import React from "react";
import styles from "./Header.module.scss";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.Header_Title}>Switch Galore</h1>
    </div>
  );
};

export default Header;
