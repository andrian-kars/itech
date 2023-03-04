import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./assets"),
      styles: path.resolve(__dirname, "./styles"),
    },
  },
});
