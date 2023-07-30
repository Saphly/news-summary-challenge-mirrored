import { beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { getArticleId } from "../src/utils/newsArticleServices.js";
import NewsSummary from "../src/Components/NewsSummary.jsx";
import testNews from "./testNews.json";

const mockNews = testNews.response.results;

describe("NewsSummary tests", () => {
  beforeEach(() => {
    const routes = [
      {
        path: "/news/:id",
        element: <NewsSummary news={mockNews} />,
      },
      {
        path: "/",
        element: <></>,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/news/${getArticleId(mockNews[0].id)}`],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
  });

  it("should render thumbnail, headline and summary", async () => {
    const newsThumbnail = await screen.findByRole("img", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });
    const newsHeadline = await screen.findByRole("heading", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });
    const newsSummary = screen.getByText(/the banksy story \(bbc radio 4\)/i);

    expect(newsThumbnail).toBeVisible();
    expect(newsHeadline).toBeVisible();
    expect(newsSummary).toBeVisible();
  });

  it("should have a link tag with a href attribute to the actual guardian article", async () => {
    const newsHeadlineLink = await screen.getByRole("link");
    expect(newsHeadlineLink).toHaveAttribute("href", mockNews[0].webUrl);
  });
});
