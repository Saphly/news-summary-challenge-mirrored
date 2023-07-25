import PropTypes from "prop-types";
import NewsPicHeadlineCard from "./NewsPicHeadlineCard";
import "./FilterableNews.css";

const FilterableNews = ({ news }) => {
  console.log(news);
  return (
    <div className="filterable-news p-5">
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
    </div>
  );
};

FilterableNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default FilterableNews;
