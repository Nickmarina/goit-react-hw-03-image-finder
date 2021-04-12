import "../../styles.scss";

const Modal = ({ imgUrl, tags, onClose }) => {
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={imgUrl} width="800" alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
