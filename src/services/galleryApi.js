import axios from "axios";

const apiKey = "20361468-1e955d15f48e5b2a394a029cb";

export const fetchPictures = (query, page) => {
  axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${apiKey}`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
};
