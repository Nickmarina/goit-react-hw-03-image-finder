import Loader from "react-loader-spinner";
import "../../styles.scss";

const PageLoader = () => {
  return (
    <div className="Loader">
      <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />
    </div>
  );
};

export default PageLoader;
