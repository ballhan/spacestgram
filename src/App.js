import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";

const URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "489PIsV43dH9EODRPLlVHJQe3vjRn9Tb5lejVrEM";

const App = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      const res = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await res.json();
      setImageData(data);
    }
  }, []);

  if (!imageData) return <div />;

  return (
    <div className="main-container">
      <Header />
      <ImageCard imageData={imageData} />
    </div>
  );
};
export default App;
