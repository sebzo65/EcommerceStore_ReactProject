import React from "react";
import styles from "./ProductGrid.module.scss";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ProductGrid = () => {
  return (
    <MDBRow className={styles.productGrid}>
      <MDBCol>
        <MDBCard className={styles.product_Card}>
          <MDBCardImage
            className={styles.product_img}
            src="https://m.media-amazon.com/images/I/71tuySY5dIL._AC_SL1500_.jpg"
            alt="Luigi's Mansion 3"
            position="top"
          />
          <MDBCardBody className={styles.product_cardBody}>
            <MDBCardTitle>Luigi's Mansion 3</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className={styles.product_Card}>
          <MDBCardImage
            className={styles.product_img}
            src="https://m.media-amazon.com/images/I/81USSJYOtYL._AC_SL1500_.jpg"
            alt="Super Smash Bros Ultimate"
            position="top"
          />
          <MDBCardBody className={styles.product_cardBodyBlue}>
            <MDBCardTitle>Super Smash Bros Ultimate</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className={styles.product_Card}>
          <MDBCardImage
            className={styles.product_img}
            src="https://m.media-amazon.com/images/I/919O1N5pvZL._AC_SL1500_.jpg"
            alt="Fire Emblem Three Houses"
            position="top"
          />
          <MDBCardBody className={styles.product_cardBody}>
            <MDBCardTitle>Fire Emblem Three Houses</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className={styles.product_Card}>
          <MDBCardImage
            className={styles.product_img}
            src="https://m.media-amazon.com/images/I/81INpQa0LZL._AC_SL1500_.jpg"
            alt="Splatoon 2"
            position="top"
          />
          <MDBCardBody className={styles.product_cardBodyBlue}>
            <MDBCardTitle>Splatoon 2</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default ProductGrid;
