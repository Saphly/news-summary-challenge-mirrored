import axios from "axios";
import { getNews } from "../src/utils/newsDataServices";
import testNews from "./testNews.json";

vi.mock(`axios`);

describe("getNews tests", () => {
  describe("GET request tests to /news", () => {
    it("should make an external data call", async () => {
      axios.get.mockResolvedValueOnce({
        data: { response: { results: testNews } },
      });

      await getNews();

      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/news`);
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
