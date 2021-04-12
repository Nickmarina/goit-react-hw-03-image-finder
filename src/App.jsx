import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import { fetchPictures } from "./services/galleryApi";
import "./styles.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <Searchbar onChangeQuery={HandleChangeQuery} query={query} />
      <main>
        {error && (
          <p>
            {error} <button onClick={() => setError(undefined)}>x</button>
          </p>
        )}

        {isLoading && <p>Loading...</p>}
        <ImageGallery gallery={gallery} />
      </main>
    </>
  );
};

export default App;
