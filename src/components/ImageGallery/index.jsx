import { useState } from 'react';
import Modal from '../Modal';
import '../../styles.scss';

const ImageGallery = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  const toggleModal = () => setShowModal(prev => !prev);

  const addLargeImg = e => {
    setLargeImg(e.target.currentSrc);
    toggleModal();
  };

  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, tags }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={addLargeImg}
          />
          {showModal && (
            <Modal url={largeImg} alt="large picture" onClose={toggleModal} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
