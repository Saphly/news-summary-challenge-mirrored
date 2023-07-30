import { expect, afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

beforeAll(() => {
  // scrollTo is a browser-only API, doesn't exist in jsdom - so stub it
  HTMLElement.prototype.scrollTo = () => {};
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  HTMLElement.prototype.scrollTo = undefined;
});
