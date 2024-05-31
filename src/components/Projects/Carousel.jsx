import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.prev}`}>❮</button>
      <img src={images[currentIndex]} alt="Project Image" className={styles.carouselImage} />
      <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.next}`}>❯</button>
    </div>
  );
};

export default Carousel;
