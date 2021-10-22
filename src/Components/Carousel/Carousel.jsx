import React from "react";
import styles from "./Carousel.module.scss";
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
          <MDBCarouselElement
            className={styles.CarouselElement}
            src="https://gameranx.com/wp-content/uploads/2017/08/H2x1_NSwitch_SuperMarioOdyssey.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://wallpapercave.com/wp/wp2386759.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://wallpapercave.com/wp/wp4565982.jpg"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
