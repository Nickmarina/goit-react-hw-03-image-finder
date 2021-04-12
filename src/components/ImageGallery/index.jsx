import "../../styles.css";
const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
