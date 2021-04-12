import '../../styles.scss';

const Modal = ({ url, alt, onClose }) => {
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={url} width="800" alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
