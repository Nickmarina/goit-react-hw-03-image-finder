import { useState, useEffect } from "react";
import { fetchPictures } from "./services/galleryApi";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import PageLoader from "./components/Loader";
import Button from "./components/Button";
import "./styles.scss";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const HandleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setGallery([]);
  };

  const HandleChangePage = () => {
    setPage((prev) => (prev += 1));
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    fetchPictures(query, page)
      .then((data) => {
        setGallery((prev) => [...prev, ...data]);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <>
      <Searchbar onChangeQuery={HandleChangeQuery} query={query} />
      <main>
        {isLoading && <PageLoader />}
        <ImageGallery gallery={gallery} />
        {gallery.length > 1 && (
          <Button onClick={HandleChangePage} page={page} />
        )}
      </main>
    </>
  );
};

export default App;
