import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getNews } from "./utils/newsDataServices";
import Header from "./Components/Header";
import FilterableNews from "./Components/FilterableNews";
import NewsSummary from "./Components/NewsSummary";

const App = () => {
  const [news, setNews] = useState([]);

  const getData = async () => {
    const data = await getNews();

    if (data instanceof Error) {
      console.error(data.message);
      setNews([]);
    } else {
      setNews(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FilterableNews news={news} />} />
        <Route path="/news/:id" element={<NewsSummary news={news} />} />
      </Routes>
    </>
  );
};

export default App;
