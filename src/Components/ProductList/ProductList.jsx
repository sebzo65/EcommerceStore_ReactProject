import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../Services/ProductArray";

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
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Game Id: {product.id}</p>
    </div>
  );
  //     <MDBRow className={styles.ProductList}>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/71tuySY5dIL._AC_SL1500_.jpg"
  //             alt="Luigi's Mansion 3"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Luigi's Mansion 3</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/81USSJYOtYL._AC_SL1500_.jpg"
  //             alt="Super Smash Bros Ultimate"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Super Smash Bros Ultimate</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/919O1N5pvZL._AC_SL1500_.jpg"
  //             alt="Fire Emblem Three Houses"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Fire Emblem Three Houses</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/81INpQa0LZL._AC_SL1500_.jpg"
  //             alt="Splatoon 2"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Splatoon 2</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/81INpQa0LZL._AC_SL1500_.jpg"
  //             alt="Splatoon 2"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Splatoon 2</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //       <MDBCol>
  //         <MDBCard className={styles.List_Card}>
  //           <MDBCardImage
  //             className={styles.List_img}
  //             src="https://m.media-amazon.com/images/I/81INpQa0LZL._AC_SL1500_.jpg"
  //             alt="Splatoon 2"
  //             position="top"
  //           />
  //           <MDBCardBody className={styles.List_cardBody}>
  //             <MDBCardTitle>Splatoon 2</MDBCardTitle>
  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>
  //     </MDBRow>
  //   );
};

export default ProductList;
