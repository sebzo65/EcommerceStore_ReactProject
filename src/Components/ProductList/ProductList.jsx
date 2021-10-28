import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../Services/ProductArray";
import { createCartItem } from "../../Services/ProductArray";
import styles from "./ProductList.module.scss";
import ProductModal from "../ProductModal";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  const increment = (event) => {
    if (count !== product.quantity) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = (event) => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleClick = (e) => {
    if (count != 0) {
      createCartItem(product);
    }
  };

  return (
    <div>
      <MDBCard className={styles.ProductCard}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              className={styles.ProductCard_img}
              src={product.imageURL}
              alt="..."
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText>{product.desc}</MDBCardText>
              <MDBCardText>Price: ${product.price}</MDBCardText>
              <button className={styles.CounterBtn} onClick={decrement}>
                -
              </button>
              <span className={styles.CounterSpan}>{count}</span>
              <button className={styles.CounterBtn} onClick={increment}>
                +
              </button>
              <button onClick={handleClick} className={styles.cartBtn}>
                Add to Cart
              </button>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <ProductModal />
    </div>
  );
};

const ProductList = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const populateProduct = async () => {
      const data = await findProduct(id);
      setProduct(data);
    };

    populateProduct();
  }, [id]);

  if (!product) {
    return <h1>Student with Id: {id} was not found</h1>;
  }

  return (
    <div className={styles.ProductList}>
      <ProductCard product={product} key={id} />
    </div>
  );
};

export default ProductList;
