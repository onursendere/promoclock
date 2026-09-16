import { defineConfig } from "vitest/config";
import { alias } from "./vitest.config.ts";

/** API contract tests: run after `npm run build`, need PHP on PATH. */
export default defineConfig({
  resolve: { alias },
  test: {
    include: ["tests/api/*.test.ts"],
    testTimeout: 20_000,
    hookTimeout: 20_000,
  },
});
