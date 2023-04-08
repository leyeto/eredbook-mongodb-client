/// <reference types="vitest"/>
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
