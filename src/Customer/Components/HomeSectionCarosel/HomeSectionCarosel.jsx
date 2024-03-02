import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import { men_kurta } from "../../../Data/men_kurta";

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slideprev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slidenext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = men_kurta.slice(0, 10).map((item) => <HomeSectionCard prodcut={item} />);

  return (
    <div className="">
      <div className="relative p5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 1 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            onClick={slidenext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </Button>
        )}

        {activeIndex > 5 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            onClick={slideprev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
