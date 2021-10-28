import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link
  rel="stylesheet"
  href="path/to/font-awesome/css/font-awesome.min.css"
></link>;

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
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </ul>
    </div>
  );
};

export default Nav;
