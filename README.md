# Ex05 Image Carousel
## Date:21-11-2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
```
App.jsx


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


App.css


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  text-align: center;
  padding: 40px;
}

h1 {
  margin-bottom: 25px;
  color: #333;
}

.carousel {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.carousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 12px 25px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 15px;
  color: #555;
}

```

## OUTPUT
![alt text](<Screenshot 2026-11-21 135755.png>) 
![alt text](<Screenshot 2026-11-21 135709.png>) 
![alt text](<Screenshot 2026-11-21 135727.png>) 
![alt text](<Screenshot 2026-11-21 135735.png>) 
![alt text](<Screenshot 2026-11-21 135740.png>)


## RESULT
The program for creating Image Carousel using React is executed successfully.