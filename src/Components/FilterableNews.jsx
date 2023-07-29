import PropTypes from "prop-types";
import NewsPicHeadlineCard from "./NewsPicHeadlineCard";
import BodyContainer from "./BodyContainer";

const FilterableNews = ({ news }) => {
  return (
    <BodyContainer>
      <div className="container-fluid">
        <div className="row row-cols-md-2 g-5">
          {news.map((article) => {
            return (
              <NewsPicHeadlineCard
                key={article.id.split("/").at(-1)}
                article={article}
              />
            );
          })}
        </div>
      </div>
    </BodyContainer>
  );
};

FilterableNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default FilterableNews;
