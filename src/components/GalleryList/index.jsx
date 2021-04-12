import { useState, useEffect } from "react";

const GalleryList = ({ fetchPictures, query, page, onChangePage }) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (!query) return;
  }, []);

  return (
    <main>
      <ul>
        <li></li>
      </ul>
    </main>
  );
};

export default GalleryList;
