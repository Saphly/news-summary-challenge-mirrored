import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "../src/Components/HomePage.jsx";
import NewsSummary from "../src/Components/NewsSummary.jsx";
import testNews from "./testNews.json";

// render homepage, assert that the img and headline renders
// then assert that user clicks the img and headline, it renders the news article summary
// mock the summary page, assert that user clicking on the headline will bring them to the actual news article

const mockNews = testNews.response.results;

describe("HomePage tests", () => {
  it("should render the news thumbnail and headline", () => {
    render(
      <MemoryRouter>
        <HomePage news={mockNews} />
      </MemoryRouter>
    );

    const newsThumbnail = screen.getByRole("img", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });
    const newsHeadline = screen.getByRole("heading", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });

    expect(newsThumbnail).toBeVisible();
    expect(newsHeadline).toBeVisible();
  });

  it("should render 'No news for today' when there is no news", () => {
    render(
      <MemoryRouter>
        <HomePage news={[]} />
      </MemoryRouter>
    );

    const noNewsText = screen.getByText(/no news for today/i);

    expect(noNewsText).toBeVisible();
  });

  it("should render the article's summary when user clicks on the thumbnail", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/news/:id",
        element: <NewsSummary news={mockNews} />,
      },
      {
        path: "/",
        element: <HomePage news={mockNews} />,
      },
    ];

    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const newsThumbnail = screen.getByRole("img", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });

    await user.click(newsThumbnail);

    expect(screen.getByText(/the banksy story \(bbc radio 4\)/i)).toBeVisible();
  });

  it("should render the article's summary when user clicks on the headline", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/news/:id",
        element: <NewsSummary news={mockNews} />,
      },
      {
        path: "/",
        element: <HomePage news={mockNews} />,
      },
    ];

    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const newsHeadline = screen.getByRole("heading", {
      name: /the week in audio: the banksy story; i’m not here to hurt you; prom 13; academy – review/i,
    });

    await user.click(newsHeadline);

    expect(screen.getByText(/the banksy story \(bbc radio 4\)/i)).toBeVisible();
  });
});
