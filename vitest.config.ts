import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export const alias = { "@": fileURLToPath(new URL("./src", import.meta.url)) };

export default defineConfig({
  resolve: { alias },
  test: {
    include: ["tests/*.test.ts"],
  },
});
