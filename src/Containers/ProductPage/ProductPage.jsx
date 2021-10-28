import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.scss";
import { getProducts } from "../../Services/ProductArray";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ProductCard = ({ product }) => {
  return (
    <div>
      <MDBRow className={styles.ProductCard}>
        <MDBCol>
          <MDBCard className={styles.List_Card}>
            <MDBCardImage
              className={styles.List_img}
              src={product.imageURL}
              alt={product.name}
              position="top"
            />
            <MDBCardBody className={styles.List_cardBody}>
              <MDBCardTitle className={styles.List_cardBody_title}>
                <Link
                  className={styles.List_cardBody_title_link}
                  to={`/products/${product.id}`}
                >
                  {product.name}
                </Link>
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState(null);

  // const query = useQuery();
  // const name = query.get("name") ?? "";
  // const limit = query.get("limit") ? parseInt(query.get("limit")) : 10;

  useEffect(() => {
    const populateProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    populateProducts();
  }, []);

  return (
    <div className={styles.ProductPage}>
      {/* <ProductList /> */}
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  );
};

export default ProductPage;
