
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1019/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1024/800/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Image Carousel</h1>

      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="Carousel"
        />

        <div className="buttons">
          <button onClick={previousImage}>
            Previous
          </button>

          <button onClick={nextImage}>
            Next
          </button>
        </div>

        <p>
          Image {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

export default App;
