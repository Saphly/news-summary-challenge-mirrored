import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // We use node v16 < v18, see https://reactrouter.com/en/main/routers/picking-a-router#testing
    setupFiles: ["./tests/setup.js", "whatwg-fetch"],
    testMatch: ["./tests/**/*.test.jsx"],
    globals: true,
    coverage: {
      provider: "istanbul", // or 'v8'
    },
  },
});
