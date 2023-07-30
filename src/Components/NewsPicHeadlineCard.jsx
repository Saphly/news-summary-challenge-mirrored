import PropTypes from "prop-types";
import { getArticleId } from "../utils/newsArticleServices";
import { useNavigate } from "react-router-dom";

const NewsPicHeadlineCard = ({ article }) => {
  const {
    webTitle,
    fields: { headline, thumbnail },
  } = article;

  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center"
      role="button"
      onClick={() => navigate("/news/" + getArticleId(article.id))}
    >
      <img src={thumbnail} className="img-fluid" alt={webTitle} />
      <h5 className="pt-2" style={{ maxWidth: "500px" }}>
        {headline}
      </h5>
    </div>
  );
};

NewsPicHeadlineCard.propTypes = {
  article: PropTypes.object,
  webTitle: PropTypes.string,
  fields: PropTypes.shape({
    headline: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};

export default NewsPicHeadlineCard;
