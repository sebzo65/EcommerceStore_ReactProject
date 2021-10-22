import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <ul className={styles.Nav_List}>
        <li>
          <Link className={styles.Nav_List_ItemLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.Nav_List_Item}>Switch Galore</li>
        <li>
          <Link className={styles.Nav_List_ItemLink} to="/products">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
