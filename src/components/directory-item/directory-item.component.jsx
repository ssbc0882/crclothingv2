import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () => navigate(route);

  return (
    <div className="directory-item-container">
      <img src={imageUrl} className="background-image" alt={imageUrl} />
      <div className="directory-body-container" onClick={onNavigationHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
