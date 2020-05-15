import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import ImageCard from "./ImageCard";

import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setImages(res.data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  function searchTerm(value) {
    setTerm(value);
  }

  return (
    <Fragment>
      <Header />
      <SearchBox onSearch={searchTerm} />

      {!isLoading && images.length === 0 && (
        <h1 className="loader">Sorry, Not Found</h1>
      )}

      {isLoading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="wrapper">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
