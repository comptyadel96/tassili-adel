import React from "react";
import "./AppHeader.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function AppHeader() {
  const handleDragStart = (e) => e.preventDefault();
  const images = [
    <img
      src="/images/tassili-dessin.jpg"
      alt="logo tassili"
      onDragStart={handleDragStart}
      className="header-img"
    />,
    <img
      src="/images/tassili02.jpg"
      alt="logo tassili"
      onDragStart={handleDragStart}
      className="header-img"
    />,
    <img
      src="/images/tassili04.jpg"
      alt="logo tassili"
      onDragStart={handleDragStart}
      className="header-img"
    />,
    <img
      src="/images/tassili05.jpeg"
      alt="logo tassili"
      onDragStart={handleDragStart}
      className="header-img"
    />,
  ];
  return (
    <div className="header-container">
      <AliceCarousel
        mouseTracking
        items={images}
        autoPlay
        disableDotsControls
        animationDuration={2000}
        autoPlayInterval={2000}
        controlsStrategy="alternate"
        paddingLeft={150}
        paddingRight={150}
        autoHeight
      />

      <div className="text-container">
        <h1 className="header-title">A la découverte du tassili...</h1>
        <h3 className="header-text">
          Le tassili n’Ajjer (en berbère : tasili n Ajer, en tifinagh : ⵜⴰⵙⵉⵍⵉ ⵏ
          ⴰⵣⴶⴰⵔ, en arabe : طاسيلي ناجر) est un massif montagneux situé au
          centre du Sahara, dans le Sud-Est de l'Algérie et dont la frange
          orientale se trouve en territoire libyen.
        </h3>
      </div>
    </div>
  );
}

export default AppHeader;
