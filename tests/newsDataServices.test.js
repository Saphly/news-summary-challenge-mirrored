import axios from "axios";
import { getNews } from "../src/utils/newsDataServices";
import testNews from "./testNews.json";

const GUARDIAN_API_URL = `https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=`;

vi.mock(`axios`);

describe("getNews tests", () => {
  describe("GET request tests to /news", () => {
    it("should make an external data call", async () => {
      axios.get.mockResolvedValueOnce({
        data: { response: { results: testNews } },
      });

      await getNews();

      // expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/news`);
      expect(axios.get).toHaveBeenCalledWith(
        GUARDIAN_API_URL + import.meta.env.VITE_GUARDIAN_API_KEY
      );
    });

    test("should return the right data if request is successful", async () => {
      axios.get.mockResolvedValueOnce({
        data: { response: { results: testNews } },
      });

      const result = await getNews();

      expect(result).toEqual(testNews);
    });

    test("should return error if request is unsuccessful", async () => {
      const error = { message: `Error` };
      axios.get.mockRejectedValueOnce(error);

      const result = await getNews();

      expect(result).toBe(error);
    });
  });
});
