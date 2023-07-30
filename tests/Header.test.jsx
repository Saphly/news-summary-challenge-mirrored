import { render, screen } from "@testing-library/react";
import Header from "../src/Components/Header.jsx";

describe("Header tests", () => {
  it("should have a link tag with a href attribute to '/'", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const brandLink = screen.getByRole("link", {
      name: /df news challenge/i,
    });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(brandLink).toHaveAttribute("href", "/");
  });
});
