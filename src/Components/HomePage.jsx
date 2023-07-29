import PropTypes from "prop-types";
import NewsPicHeadlineCard from "./NewsPicHeadlineCard";
import BodyContainer from "./BodyContainer";

const HomePage = ({ news }) => {
  const renderAllNewsCard = () =>
    news.map((article) => {
      return (
        <NewsPicHeadlineCard
          key={article.id.split("/").at(-1)}
          article={article}
        />
      );
    });

  return (
    <BodyContainer>
      <div className="container-fluid">
        <div className="row row-cols-md-2 g-5">
          {news.length > 0 ? renderAllNewsCard() : <div>No news for today</div>}
        </div>
      </div>
    </BodyContainer>
  );
};

HomePage.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default HomePage;
