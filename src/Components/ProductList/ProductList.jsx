import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../Services/ProductArray";
import { updateProduct } from "../../Services/ProductArray";
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
  const [favourite, setFavourite] = useState(false);
  const [cartqty, setCartqty] = useState(count);

  //Handle click for quantity incrementor
  const increment = (event) => {
    if (count !== product.quantity) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  //Handle click for quantity decrementor
  const decrement = (event) => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  //Handles click event for the cart
  const handleClick = async (e) => {
    if (count !== 0) {
      setCartqty(cartqty);
    }
    await createCartItem(product);
  };

  //Function that changes boolean value of 'favourite' in
  //firebase
  const handleSubmit = async (event) => {
    setFavourite(!favourite);
    const partial = {
      favourite: favourite,
    };
    await updateProduct(product.id, partial);
  };

  // const themetoggle = () => {
  //   favourite === "favourited"
  //     ? setFavourite("favouriteBtn")
  //     : setFavourite("Favourited");
  // };

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
              <MDBCardTitle>
                {product.name}{" "}
                <button
                  className={styles.favouriteBtn}
                  value={
                    favourite === "favourited"
                      ? styles.favouriteBtn
                      : styles.Favourited
                  }
                  onClick={handleSubmit}
                >
                  Favourite
                  {product.favourite}
                </button>
              </MDBCardTitle>

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
