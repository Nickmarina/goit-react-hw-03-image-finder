import { useState, useEffect } from "react";
import { fetchPictures } from "./services/galleryApi";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import PageLoader from "./components/Loader";
import "./styles.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const HandleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const HandleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  // useEffect(() => {
  //   setPage(1);
  // }, [query]);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    fetchPictures(query, page)
      .then((data) => {
        setGallery(data);
      })
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <Searchbar onChangeQuery={HandleChangeQuery} query={query} />
      <main>
        {isLoading && <PageLoader />}
        <ImageGallery gallery={gallery} />
      </main>
    </>
  );
};

export default App;
