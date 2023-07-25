import { useEffect, useState } from "react";
import { getNews } from "./utils/newsDataService";
import Header from "./Components/Header";
import FilterableNews from "./Components/FilterableNews";

const App = () => {
  const [news, setNews] = useState([]);

  const getData = async () => {
    const data = await getNews();

    if (data instanceof Error) {
      console.error(data.message);
      setNews([]);
    } else {
      console.log(data);
      setNews(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <FilterableNews news={news} />
    </>
  );
};

export default App;
