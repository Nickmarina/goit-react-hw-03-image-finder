import "../../styles.scss";

const Button = ({ onClick, page }) => {
  if (page > 1) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="btnContainer">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
