import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BodyContainer from "./BodyContainer";

const NewsSummary = ({ news }) => {
  const { id } = useParams();

  const [articleDetails, setArticleDetails] = useState({
    webUrl: "",
    fields: {
      bodyText: "",
      headline: "",
      thumbnail: "",
    },
  });

  useEffect(() => {
    const [article] = news.filter((article) => article.id.includes(id));
    console.log("article newsSummary: ", article);
    if (article) setArticleDetails(article);
  }, [news]);

  return (
    <BodyContainer className="d-flex flex-column align-items-center ">
      <img
        src={articleDetails.fields.thumbnail}
        className="img-fluid"
        alt={articleDetails.fields.headline}
      />
      <div className="col-lg-6">
        <a
          href={articleDetails.webUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="py-4 text-center">{articleDetails.webTitle}</h3>
        </a>
        <div className="fs-5">{articleDetails.fields.bodyText}</div>
      </div>
    </BodyContainer>
  );
};

NewsSummary.defaultProps = {
  news: [],
};

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.object.isRequired,
      webUrl: PropTypes.string.isRequired,
      webTitle: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default NewsSummary;
