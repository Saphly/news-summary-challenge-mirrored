import PropTypes from "prop-types";

const NewsPicHeadlineCard = ({ article }) => {
  const {
    webTitle,
    fields: { headline, thumbnail },
  } = article;
  return (
    <div className="d-flex flex-column align-items-center">
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
