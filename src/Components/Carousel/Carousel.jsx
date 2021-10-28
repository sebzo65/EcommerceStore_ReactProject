import React from "react";
import styles from "./Carousel.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findHomeProduct } from "../../Services/ProductArray";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

const Carousel = () => {
  return (
    <MDBCarousel className={styles.Carousel} showControls interval={4000}>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          {/* <Link to={`/products/${product.id}`}></Link> */}
          <MDBCarouselElement
            className={styles.CarouselElement}
            src="https://gameranx.com/wp-content/uploads/2017/08/H2x1_NSwitch_SuperMarioOdyssey.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            className={styles.CarouselElement}
            src="https://wallpapercave.com/wp/wp2386759.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            className={styles.CarouselElement}
            src="https://wallpapercave.com/wp/wp4565982.jpg"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
export default Carousel;

// const CarouselPage = () => {
//   const { id } = useParams();
//   const [homeProduct, setHomeProduct] = useState(null);

//   useEffect(() => {
//     const populateProduct = async () => {
//       const data = await findHomeProduct(id);
//       setHomeProduct(data);
//     };

//     populateProduct();
//   }, [id]);

//   if (!homeProduct) {
//     return <h1>Product with Id: {id} was not found</h1>;
//   }
//   return (
//     <div>
//       <Carousel product={product} key={id} />
//     </div>
//   );
// };

// export default CarouselPage;
