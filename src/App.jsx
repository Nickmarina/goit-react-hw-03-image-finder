import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import GalleryList from "./components/GalleryList";
import { fetchPictures } from "./services/galleryApi";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const HandleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };
  const HandleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  // useEffect(() => {
  //   fetchPictures().then((pictures) => setQuery(pictures));
  // }, []);

  return (
    <>
      <Searchbar onChangeQuery={HandleChangeQuery} />
      <GalleryList
        fetchPictures={fetchPictures}
        query={query}
        page={page}
        onChangePage={HandleChangePage}
      />
    </>
  );
};

export default App;
