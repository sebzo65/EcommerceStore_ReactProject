import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../Services/ProductArray";
import styles from "./ProductModal.module.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";

const ProductModalCard = ({ product }) => {
  const [optLgModal, setOptLgModal] = useState(false);

  const toggleShow = () => setOptLgModal(!optLgModal);
  return (
    <div>
      <MDBBtn className={styles.ModalCardButton} onClick={toggleShow}>
        You might also like
      </MDBBtn>
      <MDBModal
        show={optLgModal}
        tabIndex="-1"
        getOpenState={(e: any) => setOptLgModal(e)}
      >
        <MDBModalDialog className={styles.ProductModalCard}>
          <MDBModalContent>
            <MDBCardImage
              className={styles.ModalCard_img}
              src={product.variantURL}
              alt="..."
              fluid
            />
            <MDBModalHeader className={styles.ProductModalCard_Title}>
              <MDBModalTitle>{product.variant}</MDBModalTitle>
              <MDBBtn className="btn-close" onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

const ProductModal = () => {
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
    <div className={styles.ProductModal}>
      <ProductModalCard product={product} key={id} />
    </div>
  );
};

export default ProductModal;
