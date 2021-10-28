import React from "react";
import styles from "./ProductGrid.module.scss";
import { getProducts } from "../../Services/ProductArray";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ProductGrid = ({ product }) => {
  return (
    <div>
      <MDBRow className={styles.ProductGrid}>
        <MDBCol>
          <MDBCard className={styles.Product_Card}>
            <MDBCardImage
              className={styles.product_img}
              src={product.imageURL}
              alt="Luigi's Mansion 3"
              position="top"
            />
            <MDBCardBody className={styles.product_cardBody}>
              <MDBCardTitle>
                <Link
                  className={styles.product_cardBody_title_link}
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

const ProductGridBackdrop = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const populateProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    populateProducts();
  }, []);

  return (
    <div className={styles.ProductGridBackdrop}>
      {/* <ProductList /> */}
      {products &&
        products.map((product, index) => (
          <ProductGrid product={product} key={index} />
        ))}
    </div>
  );
};

export default ProductGridBackdrop;
