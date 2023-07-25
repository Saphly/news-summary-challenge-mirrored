const GUARDIAN_API_URL = `https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=`;

import axios from "axios";
import mockNews from "../../guardianNewsData.json";

export const getNews = async () => {
  try {
    // const responseData = await axios.get(
    //   GUARDIAN_API_URL + import.meta.env.VITE_GUARDIAN_API_KEY
    // );
    // return responseData.data.response.results;

    return mockNews.results;
  } catch (error) {
    return error;
  }
};
