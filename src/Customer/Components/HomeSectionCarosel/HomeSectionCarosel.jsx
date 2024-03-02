import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

// ... (your imports)

const HomeSectionCarosel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slideprev = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slidenext = () => {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard prodcut={item} />);

  const shouldHideNext = activeIndex >= items.length - 5 || items.length <= 5;
  const shouldHidePrev = activeIndex === 0;

  return (
    <div className="border">
      <h2 className="text-2x1 font-extrabold text-grey-800 py-5">{sectionName}</h2>
      <div className="relative p5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {!shouldHideNext && (
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

        {!shouldHidePrev && (
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
