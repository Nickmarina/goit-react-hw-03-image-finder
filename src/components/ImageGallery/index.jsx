import "../../styles.scss";
import { useState } from "react";
import Modal from "../Modal";

const ImageGallery = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={toggleModal}
          />
          {showModal && (
            <Modal imgUrl={largeImageURL} tags={tags} onClose={toggleModal} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
