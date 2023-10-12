import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";


// Define a functional component called Container that takes a prop called searchTerm
const Container = ({ searchTerm }) => {
    // Access the images, loading, and runSearch functions from the PhotoContext using the useContext hook
    const { images, loading, runSearch } = useContext(PhotoContext);
    useEffect(() => {
    // Run the runSearch function whenever the searchTerm prop changes
        runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);


  // Render the component
  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;