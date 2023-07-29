import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsPicHeadlineCard = ({ article }) => {
  const {
    webTitle,
    fields: { headline, thumbnail },
  } = article;

  return (
    <div className="d-flex flex-column align-items-center">
      <Link to={"/news/" + article.id.split("/").at(-1)}>
        <img src={thumbnail} className="img-fluid" alt={webTitle} />
        <h5 className="pt-2" style={{ maxWidth: "500px" }}>
          {headline}
        </h5>
      </Link>
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
