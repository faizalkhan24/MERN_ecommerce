import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarosalData } from "./MainCarosalData";

const MainCarosal = () => {
  const items = mainCarosalData.map((item) => (
    <img className="cursor-pointer" src={item.image} role="presentation" alt="" />
  ));

  return (
    <AliceCarousel mouseTracking 
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite  />
  );
};

export default MainCarosal;
