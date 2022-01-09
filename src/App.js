import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";

import { ShimmerPostItem } from "react-shimmer-effects";

const URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "489PIsV43dH9EODRPLlVHJQe3vjRn9Tb5lejVrEM";

const App = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      setLoading(true);
      try {
        const res = await fetch(`${URL}?api_key=${API_KEY}`);
        const data = await res.json();
        setLoading(false);
        setImageData(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="main-container">
      <Header />
      {loading ? (
        <div className="loading-container">
          <ShimmerPostItem card title imageWidth={200} imageHeight={200} />
        </div>
      ) : (
        ""
      )}

      {imageData ? <ImageCard imageData={imageData} /> : ""}
    </div>
  );
};
export default App;
