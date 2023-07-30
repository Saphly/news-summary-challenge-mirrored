import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getNews } from "./utils/newsDataServices";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NewsSummary from "./Components/NewsSummary";
import Footer from "./Components/Footer";

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
        <Route path="/" element={<HomePage news={news} />} />
        <Route path="/news/:id" element={<NewsSummary news={news} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
